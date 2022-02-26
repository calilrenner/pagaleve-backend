import { getRepository } from 'typeorm';
import Customer from '@/entities/customer';

export async function findCustomers() {
    return getRepository(Customer).find();
}
