import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CarDto, FindCarParameters } from './car.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from 'src/database/entities/car.entity';
import { Repository, FindOptionsWhere, Equal } from 'typeorm';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class CarService {
    constructor(
        @InjectRepository(Car) 
        private carRepository: Repository<Car>,
        @Inject('CARS_SERVICE')
        private kafkaClient: ClientKafka
    ) {}

    async create(carDto: CarDto){
        const car = this.mapDtoToEntity(carDto);
        
        const newCar = await this.carRepository.save(car);

        this.kafkaClient.emit('cars', JSON.stringify(carDto));
    }

    async update(id: string, carDto: CarDto){
        const car = await this.carRepository.findOne({ where: { id }});

        if(!car){
            throw new NotFoundException(`Car with id '${id}' not found`);
        }

        await this.carRepository.update(id, this.mapDtoToEntity(carDto));
    }

    async getById(id: string): Promise<CarDto | null>{
        const car = await this.carRepository.findOne({ where: { id }});

        if(!car){
            throw new NotFoundException(`Car with id '${id}' not found`);
        }
        
        return this.mapEntityToDto(car);
    }

    async getAll(params: FindCarParameters) : Promise<CarDto[]>{
        const searchParams: FindOptionsWhere<Car> = {}

        if(params.model){
            searchParams.model = Equal(params.model);
        }

        if(params.year){
            searchParams.year = Equal(params.year);
        }

        if(params.carModel){
            searchParams.carModel = Equal(params.carModel);
        }

        if(params.color){
            searchParams.color = Equal(params.color);
        }

        const result = await this.carRepository.find({
            where: searchParams
        });

        return result.map(x => this.mapEntityToDto(x));
    }

    private mapEntityToDto(car: Car) {
        const carDto: CarDto = {
            model: car.model,
            color: car.color,
            carModel: car.carModel,
            year: car.year,
            costPrice: car.costPrice
        };
        return carDto;
    }

    private mapDtoToEntity(carDto: CarDto) :Car{
        const car = new Car()
        
        car.model = carDto.model;
        car.color = carDto.color;
        car.carModel = carDto.carModel;
        car.year = carDto.year
        car.active = true;
        car.costPrice = carDto.costPrice;

        return car;
    }
}
