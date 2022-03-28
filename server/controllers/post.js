import nodemailer from 'nodemailer';
import PostModel from '../models/PostModel.js';
import UserSchema from '../models/UserModel.js';

export const getPosts = async (req,res) => {
    try {
        const allPosts = await PostModel.find();
        res.status(200).json(allPosts)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const createPost = async (req,res) => {
    const post = req.body;
    try {
        if(!req.userId) return res.json({message:'Unauthenticated'});
        const newPost = new PostModel({...post,creator:req.userId,createdAt: new Date().toISOString()});
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message:error.message});
        console.log(error)
    }
}

/*
export const uploadImage = async(req,res) => {
    let fileType = req.file.mimetype.split('/')[1];
    let newFileName = req.file.filename + '.' + fileType;
    fs.rename(`./myImages/${req.file.filename}`,`./myImages/${newFileName}`,() => {});
    res.status(201).json(newFileName);
}
*/
/*
export const addComments = async (req,res) => {
    const {id} = req.params;
    const {value} = req.body;
    try {
        const post = await PostModel.findById(id);
        post.prices.push({...value,commentCreator:req.userId});
        const updatedPost = await PostModel.findByIdAndUpdate(id,post,{new:true});
        res.status(201).json(updatedPost)
    } catch (error) {
       console.log(error) 
    }
}
*/

export const deletePost = async (req,res) => {
    const {id} = req.params;
    try {
        await PostModel.findByIdAndRemove(id);
        res.status(200).json({msg:'post deleted'})
    } catch (error) {
        console.log(error)
    }
}

export const getUserProfile = async (req,res) => {
    const {id} = req.params;
    try {
        const user = await UserSchema.findById(id);
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
    }
}

export const sendOrder = async (req,res) => {
    const output = `
        New Order
        from : ${req.body.vendeurNom} ${req.body.vendeurPrenom} - ${req.body.vendeurAdresse} - ${req.body.vendeurPhone}
        to : ${req.body.acheteurNom} ${req.body.acheteurPrenom} - ${req.body.acheteurAdresse} - ${req.body.acheteurPhone}
        produit : ${req.body.product}
        prix : ${req.body.prix}
    `
    try {
        let transporter = nodemailer.createTransport({
            host: "mail.privateemail.com",
            port: 587,
            secure: false, 
            auth: {
              user: 'contact@electringo.com', 
              pass: 'electringo26955951',
            },
            tls:{
                rejectUnauthorized:false
            }
          });
        let info = await transporter.sendMail({
            from: 'contact@electringo.com', // sender address
            to: 'elammari2022@gmail.com', // list of receivers
            subject: 'Electringo', // Subject line
            text: output, // plain text body
          });
    } catch (error) {
        console.log(error.message)
    }
}