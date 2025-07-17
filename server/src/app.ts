import express from 'express';
import { json } from 'express';
import router from './routes/routes.js';
import { requestLogger } from './middleware/requestLogger.js';
import { requestResponseInterceptor } from './middleware/interceptor.js';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(json());
app.use(cors(
    {
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true
    }
))
app.use(express.static(path.join(__dirname, '../../client/dist/client/browser')));
// app.use(requestLogger);
app.use(router);
app.use(requestResponseInterceptor);

export default app;