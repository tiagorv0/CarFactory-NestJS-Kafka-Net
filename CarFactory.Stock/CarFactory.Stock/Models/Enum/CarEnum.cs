using System.ComponentModel;

namespace CarFactory.Stock.Models.Enum;

public enum Model
{
    Yaris,
    Corolla,
    Camry,
    CorollaCross,
    RAV4,
    Hilux,
    SW4,
}

public enum CarModel
{
    HATCH = 1,
    SEDAN = 2,
    SUV = 3,
    PICKUP = 4
}

public enum Color
{
    [Description("Branco")]
    WHITE = 1,
    [Description("Preto")]
    BLACK = 2,
    [Description("Cinza")]
    GREY = 3,
    [Description("Vermelho")]
    RED = 4,
    [Description("Azul")]
    BLUE = 5
}