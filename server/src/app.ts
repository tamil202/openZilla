import express from 'express';
import { json } from 'express';
import router from './routes/routes.js'
import { requestLogger } from './middleware/requestLogger.js'
import { requestResponseInterceptor } from './middleware/interceptor.js'


const app = express();
app.use(json());
app.use(requestLogger);
app.use(router);
app.use(requestResponseInterceptor)

export default app;