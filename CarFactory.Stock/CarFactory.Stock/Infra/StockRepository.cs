using CarFactory.Stock.Models.Dto;
using CarFactory.Stock.Models.Entities;
using CarFactory.Stock.Models.Options;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using System.Linq.Expressions;

namespace CarFactory.Stock.Infra;

public class StockRepository : IStockRepository
{
    private readonly IMongoCollection<StockEntity> _stock;

    public StockRepository(IOptions<DatabaseOptions> options)
    {
        var databaseOptions = options.Value;
        var client = new MongoClient(databaseOptions.ConnectionString);
        var database = client.GetDatabase(databaseOptions.DatabaseName);
        _stock = database.GetCollection<StockEntity>("Stock");

        var uniqueOptions = new CreateIndexOptions() { Unique = true };
        var indexModel =  Builders<StockEntity>.IndexKeys
            .Ascending(x => x.CarModel)
            .Ascending(x => x.Model)
            .Ascending(x => x.Color)
            .Ascending(x => x.CarYear);
        _stock.Indexes.CreateOne(new CreateIndexModel<StockEntity>(indexModel, uniqueOptions));
    }

    public async Task AddAsync(StockEntity stock, CancellationToken cancellationToken = default)
    {
        stock.Id = ObjectId.GenerateNewId().ToString();
        await _stock.InsertOneAsync(stock, cancellationToken);
    }

    public async Task UpdateAsync(string id, StockEntity stock, CancellationToken cancellationToken = default)
    {
        await _stock.ReplaceOneAsync(transfer => transfer.Id == id, stock, cancellationToken: cancellationToken);
    }

    public async Task<IEnumerable<StockEntity>> GetAllAsync(Expression<Func<StockEntity, bool>> filter = null, CancellationToken cancellationToken = default)
    {
        if (filter is not null)
            return await _stock.Find(filter).ToListAsync(cancellationToken);

        return await _stock.AsQueryable().ToListAsync(cancellationToken);
    }

    public async Task<List<StockEntity>> GetByParamsAsync(StockParams stockParams)
    {
        var query = _stock.AsQueryable();

        if (stockParams.Model is not null)
            query = query.Where(x => stockParams.Model.Contains(x.Model));

        if (stockParams.CarModel is not null)
            query = query.Where(x => stockParams.CarModel.Contains(x.CarModel));

        if (stockParams.Color is not null)
            query = query.Where(x => stockParams.Color.Contains(x.Color));

        if (stockParams.Active is not null)
            query = query.Where(x => x.Active == stockParams.Active);

        if (stockParams.Quantity is not null)
            query = query.Where(x => x.Quantity == stockParams.Quantity);

        if (stockParams.MoreThan is not null)
            query = query.Where(x => x.CreatedAt >= stockParams.MoreThan);

        if (stockParams.LessThan is not null)
            query = query.Where(x => x.CreatedAt <= stockParams.LessThan);

        return await query.ToListAsync();
    }

    public async Task<StockEntity> GetOneAsync(Expression<Func<StockEntity, bool>> filter = null, CancellationToken cancellationToken = default)
    {
        return await _stock.Find(filter).FirstOrDefaultAsync(cancellationToken);
    }

    public async Task DeleteAsync(string id, CancellationToken cancellationToken = default)
    {
        await _stock.DeleteOneAsync(transfer => transfer.Id == id, cancellationToken);
    }
}
