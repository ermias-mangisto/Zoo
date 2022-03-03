const { timeStamp } = require('console');
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const EmployeeSchema = new Schema({

    Name:{
     type:String,
     required:true
    },   
    Job:{
        type:String,
        required:true
    },
   Email:{
        type:String,
        required:true
    },
    Phone:{
        type:Number,
        required:true
    },

},{timeStamp:true})
module.exports =mongoose.model("Employee",EmployeeSchema);