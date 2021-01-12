import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { VaccineController } from "./vaccine.controller";
import { Vaccine } from "./dto/vaccine.entity";
import { VaccineService } from "./vaccine.service";

@Module({
    imports: [TypeOrmModule.forFeature([Vaccine])],
    providers: [VaccineService],
    controllers: [VaccineController]
})
export class VaccineModule{}