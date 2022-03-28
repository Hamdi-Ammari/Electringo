import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import UserSchema from '../models/UserModel.js';


export const register = async (req,res) => {
    const {nom,prenom,adresse,phoneNumber,password} = req.body;
    try {
        const existingUser = await UserSchema.findOne({phoneNumber});
        if (existingUser) return res.status(400).json({message:'compte déjà existant'});
        const hashedPassword = await bcrypt.hash(password,12);
        const result = await UserSchema.create({nom:nom.toLowerCase(),prenom:prenom.toLowerCase(),adresse,phoneNumber,password:hashedPassword});
        const token = jwt.sign({phoneNumber:result.phoneNumber,id:result._id},process.env.SECRET_CODE);
        res.status(201).json({result,token})
    } catch (error) { 
        res.status(500).json({message:'Error'});
        console.log(error.message)
    }
}


export const login = async (req,res) => {
    const {phoneNumber,password} = req.body;
    
    try {
        const existingUser = await UserSchema.findOne({phoneNumber});
        if(!existingUser) return res.status(404).json({message:`compte n'existe pas`});
        const isPasswordCorrect = await bcrypt.compare(password,existingUser.password);
        if(!isPasswordCorrect) return res.status(400).json({message:`mot de passe incorrect`});
        const token = jwt.sign({phoneNumber:existingUser.phoneNumber,id:existingUser._id},process.env.SECRET_CODE);
        res.status(200).json({result:existingUser,token});
    } catch (error) {
        res.status(500).json({message:'Error'})
        console.log(error)
    }
}

export const getUser = async (req,res) => {
    const {phoneNumber} = req.body;
    try {
        const user = await UserSchema.findOne({phoneNumber});
        if(!user) return res.status(404).json({message:`aucun utilisateur avec cet numero`});
        res.status(200).json(user)
    } catch (error) {
        console.log(error.message)
    }
}

