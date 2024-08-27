import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";
import { CarModel, Color, Model } from "../enums/car.enum";

@Entity({ name: 'cars' })
export class Car extends BaseEntity{
    @Column({type: "enum", enum: Model})
    model: Model;

    @Column({ type: "enum", enum: Color })
    color: Color;

    @Column({ type: "enum", enum: CarModel })
    carModel: CarModel;

    @Column('int')
    year: number;

    @Column('decimal', { precision: 9, scale: 2 })
    costPrice: number
}