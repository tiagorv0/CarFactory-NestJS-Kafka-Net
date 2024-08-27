"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const typeorm_1 = require("typeorm");
const car_entity_1 = require("./entities/car.entity");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const configService = new config_1.ConfigService();
const dataSourceOptions = {
    type: 'mysql',
    host: configService.get('DB_HOST'),
    port: +configService.get('DB_PORT'),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_NAME'),
    entities: [car_entity_1.Car],
    migrations: [__dirname + '/migrations/*.ts'],
};
exports.default = new typeorm_1.DataSource(dataSourceOptions);
//# sourceMappingURL=typeOrm.migration-config.js.map