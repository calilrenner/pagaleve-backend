import { getRepository } from 'typeorm';

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
