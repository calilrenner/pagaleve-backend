import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('customers')
export default class Customer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    contact: string;

    @Column()
    number: string;
}
