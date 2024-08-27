using System.Linq.Expressions;
using CarFactory.Stock.Models.Dto;
using CarFactory.Stock.Models.Entities;

namespace CarFactory.Stock.Infra;

public interface IStockRepository
{
    Task AddAsync(StockEntity stock, CancellationToken cancellationToken = default);
    Task UpdateAsync(string id, StockEntity stock, CancellationToken cancellationToken = default);
    Task<IEnumerable<StockEntity>> GetAllAsync(Expression<Func<StockEntity, bool>> filter = null, CancellationToken cancellationToken = default);
    Task<StockEntity> GetOneAsync(Expression<Func<StockEntity, bool>> filter = null, CancellationToken cancellationToken = default);
    Task DeleteAsync(string id, CancellationToken cancellationToken = default);
    Task<List<StockEntity>> GetByParamsAsync(StockParams stockParams);
}
