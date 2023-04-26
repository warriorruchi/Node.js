import express from "express";
import {config} from "dotenv";

import userRoutes from "./routes/user.js"
import taskRoutes from "./routes/task.js"
import cookieParser from "cookie-parser";



 export const app = express();



config({
    path: "./data/configu.env",
});

// Using Middleware
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1" ,userRoutes);
app.use("/api/v1" ,taskRoutes);


    

app.get("/",(req,res)=>{
  res.send("Nice working");
});




