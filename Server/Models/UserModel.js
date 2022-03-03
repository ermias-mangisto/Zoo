const { timeStamp } = require('console');
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const UserSchema = new Schema({

    UserName:{
     type:String,
     required:[true,'first name is required']
    },      
    Password:{
        type:String,
        required:[true,'password is required']
    },
   Email:{
        type:String,
        unique:true,
        required:[true,'email is required']
    }
    

},{timeStamps:true})
module.exports =mongoose.model("User",UserSchema);