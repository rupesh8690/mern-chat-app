import mongoose from "mongoose";
const userSchema= mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"]
    },
    profilePic:{
        type:String,
        default:""
    }
},
//created at updated at => member since <created at>
{timestamps:true});

//creating model
const User=mongoose.model("User",userSchema);
export default User;