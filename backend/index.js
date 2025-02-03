import express, { Router } from 'express';
import dotenv from 'dotenv';
import Connectdb from './utils/dbConnection.js';
import router from './routes/data.routes.js';
import cors from 'cors';
dotenv.config();
const app = express();
//middlewares 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOption =  {
    origin:'http://localhost:5173',
    credentials :true
}

app.use(cors(corsOption));
app.use('/admin', router);
const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server listen at Port ${PORT}`);
    Connectdb();
});