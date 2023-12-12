import express from 'express';
import asyncHandldr from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';
const router= express.Router();

router.get('/', asyncHandldr(async(req,res)=>{
    const products=await Product.find({});
    throw new Error('Resources not found');
    res.json(products);
}));

router.get('/:id',asyncHandldr(async(req,res)=>{
    const produt= await Product.findById(req.params.id);
    if(produt){
        res.json(produt);
    }else{
        res.status(404);
        throw new Error('Resource not found');
    }
}));

export default router;