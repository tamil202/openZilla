import { Request, Response, NextFunction } from 'express';
import { Logger } from '../logger.js'; // Or your winston/logger

export const requestResponseInterceptor = (req: Request, res: Response, next: NextFunction) => {
  // ---- 1. Log incoming request ----
  Logger.info(`Incoming Request: ${req.method} ${req.originalUrl}`);
  if (Object.keys(req.body).length) {
    Logger.info(`Request Body: ${JSON.stringify(req.body)}`);
  }
  if (Object.keys(req.query).length) {
    Logger.info(`Query Params: ${JSON.stringify(req.query)}`);
  }

  // ---- 2. Intercept outgoing response ----
  const originalSend = res.send.bind(res);

  res.send = (body?: any): Response => {
    Logger.info(`Response Status: ${res.statusCode}`);
    Logger.info(`Response Body: ${body}`);
    return originalSend(body);
  };

  next();
};
