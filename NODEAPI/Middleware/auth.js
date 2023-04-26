import{Users} from "../models/user.js";
import jwt from "jsonwebtoken";
export const isAuthizated=async(req,res,next)=>{

    const {token}= req.cookies;
    console.log(token);

    if(!token)
    return res.status(404).json({
        success:false,
        message:"Login First",
    });

    const decoded= jwt.verify(token,process.env.JWT_SECRET);
    req.user= await Users.findById(decoded._id);
    next();

}