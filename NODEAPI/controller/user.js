
import { Users } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from"jsonwebtoken";
import { sendCookies } from "../utils/features.js";
export const getUserall= async(req,res)=>{
    const users= await Users.find({})
    res.json({
        success:true,
        users,
    });
};



export const register =async(req,res)=>{
    const {name,email,password}=req.body;

    let user= await Users.findOne({email});

    if(user)
    return res.status(404).json({
        success:false,
        message:"User Already Exist",
    });
    const hashedPassword= await bcrypt.hash(password,10)

    user=await Users.create({name,email,password:hashedPassword});
    // generted token
    
    sendCookies(user,res,"Register Sucessfully",201);
    
};

export const login=async(req,res,next)=>{

    const {email,password}=req.body;


    const user= await Users.findOne({email}).select("+password");

    if(!user)
    return res.status(404).json({
        success:false,
        message:"User Does not  Exist",
    });

    const isMatch=await bcrypt.compare(password,user.password);

    if(!isMatch)
    return res.status(404).json({
        success:false,
        message:"User Does not  Exist",
    });

    sendCookies(user,res,`welcome back,${user.name}`,200)

}
export const getmyprofile=async(req,res)=>{

    res.status(200).json({
        success:true,
        user:req.user,
    })
}

export const logout =async(req,res)=>{

    res.status(200).cookie("token","",{expire:new Date(Date.now())}).json({
        success:true,
        user:req.user,
        sameSite: process.env.NODE_ENV==="Development"? "lax":"none",
        secure:process.env.NODE_ENV==="Development"? false:true,
    })
}