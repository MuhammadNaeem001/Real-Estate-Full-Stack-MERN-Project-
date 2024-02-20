import express from "express";
import mongoose from "mongoose";
import  dotenv from "dotenv";
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js'
dotenv.config();
mongoose.connect (process.env.MONGO).then(()=>{
    console.log('connected to mongoDb!')
})
.catch((err)=>{
    console.log(err)
})

const app = express()

app.use(express.json());

app.listen(3000,()=>{
    console.log("server is running on the port 3000")
})

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);

app.use((err,req,res,next)=>{
    const statuscode=err.statuscode ||500;
    const message= err.message ||'internal server error';
    return res.status(statuscode).json({
        success:false,
        statuscode,
        message,
    })
})
