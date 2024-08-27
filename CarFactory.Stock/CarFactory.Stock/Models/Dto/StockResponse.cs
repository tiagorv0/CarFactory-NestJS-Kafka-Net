
using CarFactory.Stock.Models.Entities;

namespace CarFactory.Stock.Models.Dto;

public class StockResponse
{
    public string Id { get; set; }
    public string Model { get; set; }
    public string CarModel { get; set; }
    public string Color { get; set; }
    public long Quantity { get; set; }
    public decimal TotalCostPrice { get; set; }

    public decimal AvaregePrice => TotalCostPrice / Quantity;

    public StockResponse(StockEntity entity)
    {
        Id = entity.Id;
        Model = entity.Model.ToString();
        CarModel = entity.CarModel.ToString();
        Color = entity.Color.ToString();
        Quantity = entity.Quantity;
        TotalCostPrice = entity.TotalCostPrice;
    }
}
