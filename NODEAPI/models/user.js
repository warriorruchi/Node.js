import mongoose from "mongoose";
const Schmema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        select:false,
        required:true,
    },
    createAt:{
        type:Date,
        default:Date.now,
    }
});

export const Users= mongoose.model("Users",Schmema);