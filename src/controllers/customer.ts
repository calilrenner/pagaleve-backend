import { Request, Response } from 'express';
import * as customerService from '@/services/customer';

export async function findCustomers(req: Request, res: Response) {
    try {
        const costumers = await customerService.findCustomers();
        return res.status(202).send(costumers);
    } catch (error) {
        return res.sendStatus(400);
    }
}
