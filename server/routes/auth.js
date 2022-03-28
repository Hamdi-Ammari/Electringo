import express from 'express';
import {register,login,getUser} from '../controllers/auth.js';

const userRoute = express.Router();

userRoute.post('/register',register);
userRoute.post('/login',login);
userRoute.post('/getUser',getUser);


export default userRoute;