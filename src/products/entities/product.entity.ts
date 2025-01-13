import { BaseEntity } from "src/shared/base/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product extends BaseEntity {
    @Column()
    libelle: string;
}
