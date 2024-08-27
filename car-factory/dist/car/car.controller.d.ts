import { CarDto, FindCarParameters } from './car.dto';
import { CarService } from './car.service';
export declare class CarController {
    private readonly carService;
    constructor(carService: CarService);
    create(carDto: CarDto): Promise<void>;
    update(id: string, carDto: CarDto): Promise<void>;
    getById(id: string): Promise<CarDto | null>;
    getAll(params: FindCarParameters): Promise<CarDto[]>;
}
