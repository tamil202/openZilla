import {Router} from 'express';
import {hello} from '../controller/hello.controller.js'

const router:Router = Router();

// Test Route
router.get('/',hello)




export default router;