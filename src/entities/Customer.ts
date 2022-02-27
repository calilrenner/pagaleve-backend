import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('customers')
export default class Customer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}