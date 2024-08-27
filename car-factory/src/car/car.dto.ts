import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { CarModel, Color, Model } from "src/database/enums/car.enum";

export class CarDto{
    @ApiProperty()
    model: Model;
    @ApiProperty()
    color: Color;
    @ApiProperty()
    carModel: CarModel;
    @ApiProperty()
    year: number;
    @ApiProperty()
    costPrice: number;
}

export class FindCarParameters {
    @ApiPropertyOptional()
    model: Model;
    @ApiPropertyOptional()
    year: number;
    @ApiPropertyOptional()
    color: Color;
    @ApiPropertyOptional()
    carModel?: CarModel;
    @ApiPropertyOptional()
    costPrice: number;
  }

