import { Task } from "../models/task.js";


export const newtask=async(req,res,next)=>{

    const{title,description}=req.body;
    console.log("w1");

    await Task.create({
        title,
        description,
        user:req.user,
    });
    console.log("w2");

    res.status(201).json({
        sucess:true,
        message:"Task added Sucessfully"
    })
    
}

export const getMyTask=async(req,res,next)=>{

    const userid=req.user._id;

    const tasks= await Task.find({user:userid});

    res.status(201).json({
        sucess:true,
        tasks,
    })

}
export const updateTask=async(req,res,next)=>{
   const task=await Task.findById(req.params.id);
   task.isCompleted= !task.isCompleted;
    await task.save();
    res.status(201).json({
        sucess:true,
        message:"Task Updated!",
    })

}
export const deleteTask=async(req,res,next)=>{
    const task=await Task.findById(req.params.id);

    if(!task)return res.status(404).json({
        sucess:false,
        message:"invalid id",
    })
     await task.deleteOne();
    res.status(201).json({
        sucess:true,
        message:"Task deleted!",
       
    })

}
