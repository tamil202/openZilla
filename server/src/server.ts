import app from './app.js';
import {PORT} from './config/dotenv.js';
import { Logger } from './logger.js';

app.listen(PORT,()=>{
    Logger.info(`http://localhost:${PORT}`)
});