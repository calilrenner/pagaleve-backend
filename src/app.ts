import '@/setup';

import express, { Response } from 'express';
import cors from 'cors';
import 'reflect-metadata';
import * as customerController from '@/controllers/customer';

import connectDatabase from './database';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_, res: Response) => {
    res.send('OK!');
});

app.get('/', customerController.findCustomers);

export async function init() {
    await connectDatabase();
}

export default app;
