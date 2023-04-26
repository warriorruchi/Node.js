import mongoose from "mongoose"

export const connectDB=()=>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "BackendAPI"
    }).then(() => { console.log("server is connectd") })
        .catch((e) => { console.log(e) })

}



