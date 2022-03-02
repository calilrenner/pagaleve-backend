import { Errback, NextFunction, Request, Response } from 'express';

async function serverMiddlewareError(
    err: Errback,
    req: Request,
    res: Response,
    next: NextFunction,
) {
    console.error(err);

    return res.sendStatus(500);
}

export { serverMiddlewareError };
