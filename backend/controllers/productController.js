import asyncHandldr from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

//@desc Fetch all produts
//@route GET /api/products
//@access Public
const getProducts = asyncHandldr(async(req,res)=>{
    const products=await Product.find({});
    res.json(products);
});

//@desc Fetch a produt
//@route GET /api/products/:id
//@access Public
const getProductById = asyncHandldr(async(req,res)=>{
    const produt= await Product.findById(req.params.id);
    if(produt){
        res.json(produt);
    }else{
        res.status(404);
        throw new Error('Resource not found');
    }
});

export {getProducts, getProductById};