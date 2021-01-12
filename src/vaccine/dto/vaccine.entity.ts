import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vaccine{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    vaccineName: string;
    @Column()
    vaccineModel: string;
}