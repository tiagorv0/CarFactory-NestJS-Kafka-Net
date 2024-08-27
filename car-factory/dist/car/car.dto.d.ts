import { CarModel, Color, Model } from "src/database/enums/car.enum";
export declare class CarDto {
    model: Model;
    color: Color;
    carModel: CarModel;
    year: number;
    costPrice: number;
}
export declare class FindCarParameters {
    model: Model;
    year: number;
    color: Color;
    carModel?: CarModel;
    costPrice: number;
}
