using CarFactory.Stock.Models.Dto;
using CarFactory.Stock.Service;
using Microsoft.AspNetCore.Mvc;

namespace CarFactory.Stock.Controllers;
[Route("api/[controller]")]
[ApiController]
public class StockController : ControllerBase
{
    private readonly IStockService _stockService;

    public StockController(IStockService stockService)
    {
        _stockService = stockService;
    }

    [HttpGet]
    public async Task<IActionResult> GetStock([FromQuery] StockParams stockParams)
    {
        return Ok(await _stockService.GetStock(stockParams));
    }
}
