import {app} from "./app.js"
import { connectDB } from"./data/data.js";

connectDB();
app.listen(4000,()=>{
    console.log(`Server is working fine on port:${process.env.PORT} in ${process.env.NODE_ENV} Mode`);
})