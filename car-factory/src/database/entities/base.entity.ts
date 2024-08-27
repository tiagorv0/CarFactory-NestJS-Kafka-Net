import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class BaseEntity{
    @PrimaryGeneratedColumn()
    id: string;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    lastUpdateAt: Date;
    @Column()
    active: boolean
}