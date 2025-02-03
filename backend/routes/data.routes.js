import express from 'express';
import { addData, getData, getsortedbyCountry, getSortedUsersByName, sortedByOldUser, sortedByTime } from '../controller/data.controller.js';
// import dataController from '../controllers/data.controller.js';

const router = express.Router();

router.route('/').post(addData);
router.route('/').get(getData);
router.route('/newuser').get(sortedByTime);
router.route('/olduser').get(sortedByOldUser);
router.route('/sorted').get(getSortedUsersByName);
router.route('/country-sort').get(getsortedbyCountry);

export default router;