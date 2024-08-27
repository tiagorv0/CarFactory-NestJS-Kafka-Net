using CarFactory.Stock.Models.Dto;

namespace CarFactory.Stock.Service;

public interface IStockService
{
    Task AddCarInStock(CarEvent carEvent, CancellationToken cancellationToken = default);
    Task<IEnumerable<StockResponse>> GetStock(StockParams stockParams);
}
