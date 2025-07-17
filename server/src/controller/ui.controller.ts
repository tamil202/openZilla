import { NextFunction, Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { Logger } from '../logger.js';

const CLIENT_DIST_PATH = path.resolve(__dirname, '../../../client/dist/client/browser');

export const UI = (_: Request, res: Response, next: NextFunction) => {
  const indexPath = path.join(CLIENT_DIST_PATH, 'index.html');

  fs.access(indexPath, fs.constants.F_OK, (err) => {
    if (err) {
      Logger.error(`UI Handler Error: index.html not found at ${indexPath}`);
      res.status(500).send('Frontend not built or missing.');
      return;
    }

    res.sendFile(indexPath);
  });
};
