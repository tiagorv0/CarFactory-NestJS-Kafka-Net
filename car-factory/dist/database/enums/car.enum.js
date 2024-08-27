"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorLabel = exports.Model = exports.CarModel = exports.Color = void 0;
var Color;
(function (Color) {
    Color[Color["WHITE"] = 1] = "WHITE";
    Color[Color["BLACK"] = 2] = "BLACK";
    Color[Color["GREY"] = 3] = "GREY";
    Color[Color["RED"] = 4] = "RED";
    Color[Color["BLUE"] = 5] = "BLUE";
})(Color || (exports.Color = Color = {}));
var CarModel;
(function (CarModel) {
    CarModel[CarModel["HATCH"] = 1] = "HATCH";
    CarModel[CarModel["SEDAN"] = 2] = "SEDAN";
    CarModel[CarModel["SUV"] = 3] = "SUV";
    CarModel[CarModel["PICKUP"] = 4] = "PICKUP";
})(CarModel || (exports.CarModel = CarModel = {}));
var Model;
(function (Model) {
    Model[Model["Yaris"] = 0] = "Yaris";
    Model[Model["Corolla"] = 1] = "Corolla";
    Model[Model["Camry"] = 2] = "Camry";
    Model[Model["CorollaCross"] = 3] = "CorollaCross";
    Model[Model["RAV4"] = 4] = "RAV4";
    Model[Model["Hilux"] = 5] = "Hilux";
    Model[Model["SW4"] = 6] = "SW4";
})(Model || (exports.Model = Model = {}));
exports.ColorLabel = new Map([
    [Color.WHITE, 'Branco'],
    [Color.BLACK, 'Preto'],
    [Color.GREY, 'Cinza'],
    [Color.RED, 'Vermelho'],
    [Color.BLUE, 'Azul'],
]);
//# sourceMappingURL=car.enum.js.map