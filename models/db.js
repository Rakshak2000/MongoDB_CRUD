const mongoose = require('mongoose')

const connectDB=async()=>{
    try{
        const conn=await mongoose.connect('mongodb+srv://rakshakjohri:1234567890@cluster0.ru34pxd.mongodb.net/ems')
        console.log("db connected successfully")
    }catch (error){
        console.log(error)

    }
}

module.exports=connectDB