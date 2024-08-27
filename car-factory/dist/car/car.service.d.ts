import { CarDto, FindCarParameters } from './car.dto';
import { Car } from 'src/database/entities/car.entity';
import { Repository } from 'typeorm';
import { ClientKafka } from '@nestjs/microservices';
export declare class CarService {
    private carRepository;
    private kafkaClient;
    constructor(carRepository: Repository<Car>, kafkaClient: ClientKafka);
    create(carDto: CarDto): Promise<void>;
    update(id: string, carDto: CarDto): Promise<void>;
    getById(id: string): Promise<CarDto | null>;
    getAll(params: FindCarParameters): Promise<CarDto[]>;
    private mapEntityToDto;
    private mapDtoToEntity;
}
