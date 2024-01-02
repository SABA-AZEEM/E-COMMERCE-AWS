import express from 'express';
import { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile, getUsers, deleteUser, getUserById, updateUser } from "../controllers/userController.js";

const router = express.Router();


router.post('/auth',authUser);


export default router;