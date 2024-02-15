import mongoose from "mongoose";

export const connectDB = async ()=>{

    try {
        const {connection}=await mongoose.connect(process.env.MONGO_DB_URL,{dbName:"work_manager"},);
        console.log("dbconnection ");
        console.log(connection);
    } 
    catch (error) {
        console.log("fail to connect to db "+error);
    }
}