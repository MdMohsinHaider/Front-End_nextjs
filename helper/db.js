import mongoose from "mongoose";
// import {User} from "@/models/user"; //⛳ for testing purpose import
export const connectDB = async ()=>{
    try {
        const {connection}=await mongoose.connect(process.env.MONGO_DB_URL,{dbName:process.env.DB_name},);
        console.log("dbconnection host ");
        // console.log(connection);
        console.log(connection.host);



//🏳️testing modele call ......................................
// const uuser= new User({
//     username:"mohsins123haider",
//     email:"Devilseedyou@gmail.com",
//     password:"mypasswerord",
//     fullName:"Md Mohsin",
//     dateOfBirth:10219976,
//     bio:"test __2"
// });
// await uuser.save();
// console.log("user created succesfully");
//🚩...............................................................




    } 
    catch (error) {
        console.log("fail to connect to db "+error);
    }
}