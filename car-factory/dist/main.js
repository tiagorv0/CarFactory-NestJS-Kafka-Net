"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const microservices_1 = require("@nestjs/microservices");
const config_1 = require("@nestjs/config");
const dotenv_1 = require("dotenv");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configSwagger = new swagger_1.DocumentBuilder()
        .setTitle('Cars')
        .setDescription('The cars API description')
        .setVersion('1.0')
        .addTag('cars')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, configSwagger);
    swagger_1.SwaggerModule.setup('api', app, document);
    (0, dotenv_1.config)();
    const configService = new config_1.ConfigService();
    app.connectMicroservice({
        transport: microservices_1.Transport.KAFKA,
        options: {
            client: {
                brokers: [configService.get('KAFKA_URL')],
            },
            consumer: {
                groupId: 'cars-consumer',
            },
        },
    });
    await app.startAllMicroservices();
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map