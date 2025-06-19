require('dotenv').config();
const mongoose=require('mongoose')
let MONGODB_URI=process.env.MONGODB_URI

exports.connectDb=async()=>{
    await mongoose.connect(MONGODB_URI);
    console.log('Database connect');
}