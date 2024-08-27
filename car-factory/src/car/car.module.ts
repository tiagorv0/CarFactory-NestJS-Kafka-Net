import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from 'src/database/entities/car.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();

const configService = new ConfigService();

@Module({
    controllers: [CarController],
    providers: [CarService],
    exports: [CarService],
    imports: [TypeOrmModule.forFeature([Car]),
        ClientsModule.register([
            {
                name: 'CARS_SERVICE',
                transport: Transport.KAFKA,
                options:{
                    client:{
                        clientId: 'cars',
                        brokers: [configService.get<string>('KAFKA_URL')],
                    },
                    consumer:{
                        groupId: 'cars-consumer'
                    }
                },
            },
        ])]
    })
export class CarModule {}
