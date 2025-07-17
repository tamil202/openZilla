import { NextFunction, Request, Response } from 'express';
import { Logger } from '../logger.js';
export const hello = (_: Request, res: Response, next: NextFunction) => {
    try {
        res.status(200).json({'message':"Server is Active!"})
    } catch (error) {
        Logger.error(String(error));
        next(error);
    }
};