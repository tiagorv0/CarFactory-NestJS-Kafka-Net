using CarFactory.Stock.Models.Enum;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace CarFactory.Stock.Models.Entities;

public class StockEntity : BaseEntity
{
    public Model Model { get; private set; }
    public CarModel CarModel { get; private set; }
    public Color Color { get; private set; }
    public long CarYear { get; private set; }
    public long Quantity { get; private set; }
    public decimal TotalCostPrice { get; private set; }

    public StockEntity(Model model, CarModel carModel, Color color, int year, decimal carCostPrice)
    {
        Model = model;
        CarModel = carModel;
        Color = color;
        CarYear = year;
        Quantity = 1;
        TotalCostPrice = carCostPrice;
        Active = true;
        CreatedAt = DateTime.Now;
    }

    public void UpdateStock(decimal carCostPrice)
    {
        Quantity += 1;
        TotalCostPrice += carCostPrice;
        UpdatedAt = DateTime.Now;
    }
}
