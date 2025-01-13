import { Column, PrimaryGeneratedColumn } from "typeorm";

export class BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('datetime')
    createdAt: string;

    @Column('datetime')
    updatedAt: string;
    
}