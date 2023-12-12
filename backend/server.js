import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { notFound,errorHandler } from './middleware/errorMiddleware.js';

connectDB(); //Connect to MongoDB

const port=process.env.PORT || 5000;
const app=express();
app.use(cors());

app.get('/',(req,res)=>{
    res.send("Saba Azeem,hello!");
});

app.use('/api/products',productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})