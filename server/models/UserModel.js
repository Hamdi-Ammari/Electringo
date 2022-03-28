import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    nom:{type:'String',required:true},
    prenom:{type:'String',required:true},
    adresse:{type:'String',required:true},
    phoneNumber:{type:'String',required:true},
    password:{type:'String',required:true},
    id:{type:'String'}
})

var UserSchema = mongoose.model('UserSchema',userSchema);

export default UserSchema;