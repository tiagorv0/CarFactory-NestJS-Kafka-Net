import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Car } from './entities/car.entity';

@Module({
    imports: [
      ConfigModule,
      TypeOrmModule.forRootAsync({
        useFactory: async (configService: ConfigService) => ({
          type: 'mysql',
          host: configService.get<string>('DB_HOST'),
          port: +configService.get<number>('DB_PORT'),
          username: configService.get<string>('DB_USERNAME'),
          password: configService.get<string>('DB_PASSWORD'),
          database: configService.get<string>('DB_NAME'),
          entities: [Car],
          migrations: [__dirname + '/migrations/*.ts'],
          synchronize: false,
        }),
        inject: [ConfigService]
      })
    ]
  })
  export class DatabaseModule { }