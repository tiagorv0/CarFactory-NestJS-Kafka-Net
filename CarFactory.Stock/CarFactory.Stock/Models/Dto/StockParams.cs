using CarFactory.Stock.Models.Enum;

namespace CarFactory.Stock.Models.Dto;

public class StockParams
{
    public Model[]? Model { get; set; }
    public CarModel[]? CarModel { get; set; }
    public Color[]? Color { get; set; }
    public bool? Active { get; set; }
    public int? Quantity { get; set; }
    public DateTime? MoreThan { get; set; }
    public DateTime? LessThan { get; set; }
}
