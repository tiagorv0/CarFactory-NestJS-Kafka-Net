namespace CarFactory.Stock.Models.Entities;

public abstract class BaseEntity
{
    public string Id { get; set; }
    public bool Active { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime? UpdatedAt { get; set; }
}
