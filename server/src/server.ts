import app from './app.js';
import { PORT as ENV_PORT } from './config/dotenv.js';
import { Logger } from './logger.js';

const PORT = typeof ENV_PORT === 'string' ? parseInt(ENV_PORT, 10) : ENV_PORT;

app.listen(PORT, '0.0.0.0', () => {
    Logger.info(`http://localhost:${PORT}`)
});
