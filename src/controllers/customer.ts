import { NextFunction, Request, Response } from 'express';
import * as customerService from '@/services/customer';
import CustomerNotFoundError from '@/errors/CustomerNotFoundError';

export async function findCustomers(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    try {
        const costumers = await customerService.findCustomers();
        return res.status(202).send(costumers);
    } catch (error) {
        return next(error);
    }
}

export async function deleteCustomers(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    const id = +req.params.id;

    try {
        const customer = await customerService.deleteCustomers(id);

        return res.status(200).send(customer);
    } catch (error) {
        if (error instanceof CustomerNotFoundError) {
            return res
                .status(404)
                .send({ message: 'Não foi possível localizar este cliente' });
        }

        return next(error);
    }
}

export async function upsertCustomer(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    const customer = req.body;

    try {
        const editedCustomer = await customerService.upsertCustomers(customer);

        return res.status(200).send(editedCustomer);
    } catch (error) {
        return res.sendStatus(400);
    }
}
