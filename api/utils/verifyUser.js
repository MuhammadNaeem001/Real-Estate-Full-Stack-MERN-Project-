import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyToken= (req,res,next)=>{
    const token = req.cookies.access_token;

    if (!token) return (errorHandler(401 ,'unathorized'))

    jwt.verify(token,process.env.JWT_SECRET,(error,user)=>{
        if(error) return next(errorHandler(403,'Forbidden'))

        req.user=user
        next();
    });

};