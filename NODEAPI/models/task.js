import mongoose from "mongoose";
const Schmema= new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    isCompleted:{
        type:Boolean,
        default:false,
    },user:{
     type:mongoose.Schema.Types.ObjectId,
     ref:"Users",
     required:true,
    },
    createAt:{
        type:Date,
        default:Date.now,
    }
});

export const Task= mongoose.model("Task",Schmema);