import express from 'express';
import dotenv from 'dotenv';
import Connectdb from './utils/dbConnection.js';

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server listen at Port ${PORT}`);
    Connectdb();
});