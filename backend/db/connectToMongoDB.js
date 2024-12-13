import mongoose from "mongoose";
const connectToMongoDB= async () =>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Connected to database");
    }catch(err){
        console.log(err);
    }
}

export default connectToMongoDB;