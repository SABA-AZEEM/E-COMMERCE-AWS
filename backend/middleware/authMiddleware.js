import jwt from 'jsonwebtoken';
import asyncHandler from './asyncHandler.js';
import User from '../models/userModel.js';

//User must be authorized
const protect = asyncHandler(async(req,res,next) => {

    //Read JWT from the 'access_token' cookie
    let token = req.cookies.access_token;

    if(token){
        try{
            //decoded is an obj that contain info of my token e.g:payloads & meta data of token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.userId).select('-password');
            next();

        }catch{
            res.status(401);
            throw new Error('Not authorized, token failed');
        }
    }else{
        res.status(401);
        throw new Error('Not authorized, no token');
    }
});

// Usre must be an admin
const admin = (req,res,next) => {
    if(req.user && req.user.isAdmin){
        next();
    }else{
        res.status(401);
        throw new Error('Not authorized as an admin');
    }
};

export {protect, admin};