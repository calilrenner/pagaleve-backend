import { getConnection, getRepository } from 'typeorm';
import Customer from '@/entities/Customer';
import CustomerNotFoundError from '@/errors/CustomerNotFoundError';

export async function findCustomers() {
    const customers = await getRepository('customers').find();

    type Customer = {
        name: string;
        email: string;
        contact: string;
        number: string;
    };
    type Hash = {
        [key: string]: Customer[];
    };

    const hashCustomers: Hash = {};

    customers.forEach((customer: Customer) => {
        if (!hashCustomers[customer?.name[0].toUpperCase()]) {
            hashCustomers[customer?.name[0].toUpperCase()] = [customer];
        } else {
            hashCustomers[customer?.name[0].toUpperCase()].push(customer);
        }
    });

    return hashCustomers;
}

export async function deleteCustomers(id: number) {
    const customer = await getConnection()
        .createQueryBuilder()
        .delete()
        .from(Customer)
        .where('id = :id', { id })
        .execute();

    if (customer.affected === 0) {
        throw new CustomerNotFoundError('Cliente não encontrado');
    }

    return customer;
}

export async function upsertCustomers(customer: Customer) {
    const editCustomer = await getRepository('customers').save(customer);

    return editCustomer;
}
