import { Body, Controller, Param, Post, Get, Put, Query } from '@nestjs/common';
import { CarDto, FindCarParameters } from './car.dto';
import { CarService } from './car.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('cars')
@Controller('car')
export class CarController {
    constructor(private readonly carService: CarService) {}

    @Post()
    async create(@Body() carDto: CarDto){
        await this.carService.create(carDto);   
    }

    @Put(':id')
    async update(@Param('id')id: string, @Body() carDto: CarDto){
        await this.carService.update(id, carDto);
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<CarDto | null>{
        return await this.carService.getById(id);
    }

    @Get()
    async getAll(@Query() params: FindCarParameters): Promise<CarDto[]>{
        return await this.carService.getAll(params);
    }
}
