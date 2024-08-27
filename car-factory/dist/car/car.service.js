"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const car_entity_1 = require("../database/entities/car.entity");
const typeorm_2 = require("typeorm");
const microservices_1 = require("@nestjs/microservices");
let CarService = class CarService {
    constructor(carRepository, kafkaClient) {
        this.carRepository = carRepository;
        this.kafkaClient = kafkaClient;
    }
    async create(carDto) {
        const car = this.mapDtoToEntity(carDto);
        const newCar = await this.carRepository.save(car);
        this.kafkaClient.emit('cars', JSON.stringify(carDto));
    }
    async update(id, carDto) {
        const car = await this.carRepository.findOne({ where: { id } });
        if (!car) {
            throw new common_1.NotFoundException(`Car with id '${id}' not found`);
        }
        await this.carRepository.update(id, this.mapDtoToEntity(carDto));
    }
    async getById(id) {
        const car = await this.carRepository.findOne({ where: { id } });
        if (!car) {
            throw new common_1.NotFoundException(`Car with id '${id}' not found`);
        }
        return this.mapEntityToDto(car);
    }
    async getAll(params) {
        const searchParams = {};
        if (params.model) {
            searchParams.model = (0, typeorm_2.Equal)(params.model);
        }
        if (params.year) {
            searchParams.year = (0, typeorm_2.Equal)(params.year);
        }
        if (params.carModel) {
            searchParams.carModel = (0, typeorm_2.Equal)(params.carModel);
        }
        if (params.color) {
            searchParams.color = (0, typeorm_2.Equal)(params.color);
        }
        const result = await this.carRepository.find({
            where: searchParams
        });
        return result.map(x => this.mapEntityToDto(x));
    }
    mapEntityToDto(car) {
        const carDto = {
            model: car.model,
            color: car.color,
            carModel: car.carModel,
            year: car.year,
            costPrice: car.costPrice
        };
        return carDto;
    }
    mapDtoToEntity(carDto) {
        const car = new car_entity_1.Car();
        car.model = carDto.model;
        car.color = carDto.color;
        car.carModel = carDto.carModel;
        car.year = carDto.year;
        car.active = true;
        car.costPrice = carDto.costPrice;
        return car;
    }
};
exports.CarService = CarService;
exports.CarService = CarService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(car_entity_1.Car)),
    __param(1, (0, common_1.Inject)('CARS_SERVICE')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        microservices_1.ClientKafka])
], CarService);
//# sourceMappingURL=car.service.js.map