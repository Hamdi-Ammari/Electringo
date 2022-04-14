import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    produit:String,
    description:String,
    image:[String],
    prix:Number,
    likes:{
        type:[String],
        default:[]
    },
    comments:{
        type:[{}],
        default:[]
    },
    creator:String,
    nom:String,
    prenom:String,
    adresse:String,
    createdAt:{
        type:Date,
        default:new Date()
    }
});

var PostModel = mongoose.model('PostModel',postSchema);
export default PostModel;