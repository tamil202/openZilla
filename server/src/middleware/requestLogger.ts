import { Request, Response, NextFunction } from 'express';
import { Logger } from '../logger.js';

export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  Logger.info(`${req.method} ${req.originalUrl}`);
  next();
};
