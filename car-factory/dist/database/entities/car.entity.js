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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const car_enum_1 = require("../enums/car.enum");
let Car = class Car extends base_entity_1.BaseEntity {
};
exports.Car = Car;
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: car_enum_1.Model }),
    __metadata("design:type", Number)
], Car.prototype, "model", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: car_enum_1.Color }),
    __metadata("design:type", Number)
], Car.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: car_enum_1.CarModel }),
    __metadata("design:type", Number)
], Car.prototype, "carModel", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Car.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 9, scale: 2 }),
    __metadata("design:type", Number)
], Car.prototype, "costPrice", void 0);
exports.Car = Car = __decorate([
    (0, typeorm_1.Entity)({ name: 'cars' })
], Car);
//# sourceMappingURL=car.entity.js.map