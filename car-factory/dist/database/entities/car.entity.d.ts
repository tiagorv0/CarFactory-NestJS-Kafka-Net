import { BaseEntity } from "./base.entity";
import { CarModel, Color, Model } from "../enums/car.enum";
export declare class Car extends BaseEntity {
    model: Model;
    color: Color;
    carModel: CarModel;
    year: number;
    costPrice: number;
}
