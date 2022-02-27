import { getRepository } from 'typeorm';

export async function findCustomers() {
    return getRepository('customers').find({ take: 10, skip: 10 });
}
