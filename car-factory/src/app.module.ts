import { Module } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { CarModule } from './car/car.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true}),
    CarModule,
    DatabaseModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
