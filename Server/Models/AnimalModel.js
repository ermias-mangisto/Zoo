const { timeStamp } = require('console');
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const AnimalSchema = new Schema({

    Name:{
     type:String,
     unique:true,
     required:[true,'name is required']
    },   
    DateOfBirth:{
        type:Date,
        required:true
    },
   CageNumber:{
        type:Number,
        required:true
    },
    Sex:{
        type:String,
        required:true
    },
    Type:{
        type:String,
        required:true
    }

},{timeStamp:true})
module.exports =mongoose.model("Animal",AnimalSchema);