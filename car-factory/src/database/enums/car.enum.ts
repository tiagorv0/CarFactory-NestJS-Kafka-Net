export enum Color{
    WHITE = 1,
    BLACK = 2,
    GREY = 3,
    RED = 4,
    BLUE = 5
}

export enum CarModel{
    HATCH = 1,
    SEDAN = 2,
    SUV = 3,
    PICKUP = 4
}

export enum Model{
    Yaris,
    Corolla,
    Camry,
    CorollaCross,
    RAV4,
    Hilux,
    SW4,

}

export const ColorLabel = new Map<number, string>([
    [Color.WHITE, 'Branco'],
    [Color.BLACK, 'Preto'],
    [Color.GREY, 'Cinza'],
    [Color.RED, 'Vermelho'],
    [Color.BLUE, 'Azul'],
  ]);