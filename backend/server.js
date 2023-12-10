import express from 'express';
import products from './data/products.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';

connectDB(); //Connect to MongoDB

const port=process.env.PORT || 5000;
const app=express();
app.use(cors());

app.get('/',(req,res)=>{
    res.send("Saba Azeem,hello!");
});
app.get('/api/products',(req,res)=>{
    res.json(products);
});
app.get('/api/products/:id',(req,res)=>{
    const produt=products.find((p)=>p._id===req.params.id);
    res.json(produt);
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})