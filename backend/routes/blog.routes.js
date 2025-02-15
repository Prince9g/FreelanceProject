import express from 'express';
import { getData, addData, deleteBlog } from '../controller/blog.controller.js';
import upload from '../middlewares/multer.js';

const router = express.Router();

router.route('/blogs-upload').post(upload.single("image"), addData);
router.route('/').get(getData);
router.route('/:id').delete(deleteBlog);

export default router;