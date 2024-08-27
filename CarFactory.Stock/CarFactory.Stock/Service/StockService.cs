using CarFactory.Stock.Infra;
using CarFactory.Stock.Models.Dto;
using CarFactory.Stock.Models.Entities;

namespace CarFactory.Stock.Service;

public class StockService : IStockService
{
    private readonly IStockRepository _stockRepository;

    public StockService(IStockRepository stockRepository)
    {
        _stockRepository = stockRepository;
    }

    public async Task AddCarInStock(CarEvent carEvent, CancellationToken cancellationToken = default)
    {
        var existStock = await _stockRepository.GetOneAsync(x => 
            x.Model == carEvent.model &&
            x.CarModel == carEvent.carModel &&
            x.Color == carEvent.color &&
            x.CarYear == carEvent.year, 
            cancellationToken);

        if(existStock is null)
            await CreateStock(carEvent, cancellationToken);
        else
            await UpdateStock(existStock, carEvent, cancellationToken);
    }

    public async Task<IEnumerable<StockResponse>> GetStock(StockParams stockParams)
    {
        var stocks = await _stockRepository.GetByParamsAsync(stockParams);

        return stocks.Select(x => new StockResponse(x));
    }

    private async Task CreateStock(CarEvent carEvent, CancellationToken cancellationToken = default)
    {
        var newStock = new StockEntity(carEvent.model, carEvent.carModel, carEvent.color, carEvent.year, carEvent.costPrice);

        await _stockRepository.AddAsync(newStock, cancellationToken);
    }

    private async Task UpdateStock(StockEntity stock, CarEvent carEvent, CancellationToken cancellationToken = default)
    {
        stock.UpdateStock(carEvent.costPrice);

        await _stockRepository.UpdateAsync(stock.Id, stock, cancellationToken);
    }
}
