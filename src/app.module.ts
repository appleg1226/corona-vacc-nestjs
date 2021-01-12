import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VaccineModule } from './vaccine/vaccine.module';
import { Vaccine } from './vaccine/dto/vaccine.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'dmschd92',
      database: 'corona_vac',
      entities: [Vaccine],
      synchronize: true
    })
  , VaccineModule],
  
})
export class AppModule {}
