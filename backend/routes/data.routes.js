import express from 'express';
import { addData, getData} from '../controller/data.controller.js';
import { addAdmin, AdminLogin } from '../controller/admin.controller.js';


const router = express.Router();

router.route('/login').post(AdminLogin);
router.route('/add').post(addAdmin);
router.route('/contact').post(addData);
router.route('/getuser').get(getData);

export default router;