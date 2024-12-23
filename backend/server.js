// const express= require("express");
// const dotenv=require("dotenv");
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

import {app,server} from'./socket/socket.js'
import connectToMongoDB from "./db/connectToMongoDB.js";



const PORT= process.env.PORT || 5000; //port value should be either 5000 or value from env file
const __dirname=path.resolve();

dotenv.config();
app.use(express.json());//to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes)

app.use(express.static(path.join(__dirname,"/frontend/dist")))

//if any router other than above
app.get("*",(req,res) =>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"));

})
// app.get("/",(req,res) =>{
//     //root route http://localhost:5000/
//     res.send("welcome to the world of programming");
// })

server.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`server is listening on port number ${PORT}`);
})



