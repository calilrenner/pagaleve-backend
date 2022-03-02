import '@/setup';
import express, { Response } from 'express';
import cors from 'cors';
import 'reflect-metadata';
import connectDatabase from './database';
import { serverMiddlewareError } from './middlewares/serverMiddlewareError';
import customerRouter from './routes/customerRoute';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_, res: Response) => {
    res.send('OK!');
});

app.use('/', customerRouter);
app.use(serverMiddlewareError);

export async function init() {
    await connectDatabase();
}

export default app;
