using CarFactory.Stock.Models.Dto;
using CarFactory.Stock.Service;
using Confluent.Kafka;
using System.Text.Json;

namespace CarFactory.Stock.Job;

public class CarConsumer : BackgroundService
{
    private readonly IServiceProvider _serviceProvider;
    private const string Topic = "cars";
    private readonly ConsumerConfig _consumerConfig;

    public CarConsumer(IServiceProvider serviceProvider, IConfiguration configuration)
    {
        _serviceProvider = serviceProvider;
        _consumerConfig = new ConsumerConfig
        {
            BootstrapServers = configuration.GetSection("KafkaConnection:Server").Value,
            GroupId = configuration.GetSection("KafkaConnection:GroupId").Value,
            AutoOffsetReset = AutoOffsetReset.Earliest
        };
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        await Task.Factory.StartNew(() => Consume(stoppingToken), stoppingToken);
    }

    private async Task Consume(CancellationToken stoppingToken)
    {
        using var consumer = new ConsumerBuilder<Ignore, string>(_consumerConfig).Build();
        consumer.Subscribe(Topic);

        while (!stoppingToken.IsCancellationRequested)
        {
            try
            {
                var consumeResult = consumer.Consume(stoppingToken);
                if (consumeResult.IsPartitionEOF)
                {
                    continue;
                }

                var stock = JsonSerializer.Deserialize<CarEvent>(consumeResult.Message.Value);
                if (stock is null)
                {
                    continue;
                }

                await AddCarInStock(stock, stoppingToken);
            }
            catch (ConsumeException e)
            {
                throw new Exception($"Error occurred: {e.Error.Reason}");
            }
        }
    }

    private async Task AddCarInStock(CarEvent carEvent, CancellationToken stoppingToken)
    {
        using (var scope = _serviceProvider.CreateScope())
        {
            var stockService = scope.ServiceProvider.GetRequiredService<IStockService>();

            await stockService.AddCarInStock(carEvent, stoppingToken);
        }
    }
}
