import { Body, Controller, Get, Logger, Param, Post } from "@nestjs/common";
import { Vaccine } from "./dto/vaccine.entity";
import { VaccineService } from "./vaccine.service";

@Controller('vacc')
export class VaccineController{
    constructor(private vaccineService: VaccineService){
        this.vaccineService = vaccineService;
    }

    private logger = new Logger(VaccineController.name);

    @Post('add')
    async addVaccine(@Body() vaccine: Vaccine): Promise<String>{
        await this.vaccineService.addVaccine(vaccine);
        return 'added successfully!';
    }

    @Get('getAll')
    async findAll(): Promise<Vaccine[]>{
        return await this.vaccineService.findAll();
    }

    @Get('get/:id')
    async findById(@Param('id') vaccineId: string): Promise<Vaccine>{
        return await this.vaccineService.findById(vaccineId);
    }
}