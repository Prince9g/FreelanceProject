import express from 'express';
import { addData, getData, getsortedbyCountry, getSortedUsersByName, sortedByOldUser, sortedByTime } from '../controller/data.controller.js';
import Admin from '../models/admin.model.js';
import { addAdmin } from '../controller/admin.controller.js';
// import dataController from '../controllers/data.controller.js';

const router = express.Router();

router.route('/login').post(Admin);
router.route('/add').post(addAdmin);
router.route('/contact').post(addData);
router.route('/getuser').get(getData);

export default router;