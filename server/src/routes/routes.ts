import { Router } from 'express';
import { hello } from '../controller/hello.controller.js'
import { UI } from '../controller/ui.controller.js'

const router: Router = Router();

// Test Route
router.get('/', hello)


// Ui Part
router.get('/web', UI)

export default router;