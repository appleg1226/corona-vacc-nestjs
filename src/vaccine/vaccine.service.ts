import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { InsertResult, Repository } from "typeorm";
import { Vaccine } from "./dto/vaccine.entity";

@Injectable()
export class VaccineService{
    constructor(
        @InjectRepository(Vaccine)
        private vaccineRepository: Repository<Vaccine>
    ){}

    async findAll(): Promise<Vaccine[]> {
        return await this.vaccineRepository.find();
    }

    async findById(id: string): Promise<Vaccine> {
        return await this.vaccineRepository.findOne(id);
    }

    async addVaccine(vaccine: Vaccine) {
        const vac = await this.vaccineRepository.insert(vaccine);
        return vac;
    }
}