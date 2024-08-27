using CarFactory.Stock.Models.Entities;
using CarFactory.Stock.Models.Enum;

namespace CarFactory.Stock.Models.Dto;

public class CarEvent
{
    public Model model { get; set; }
    public CarModel carModel { get; set; }
    public Color color { get; set; }
    public int year { get; set; }
    public decimal costPrice { get; set; }
}
