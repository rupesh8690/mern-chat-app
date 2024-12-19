import User from "../models/user.model.js";

export const getUserForSidebar= async (req,res) =>{
    try{
        const loggedInUserId=req.user._id;//coming from protectRoute
        const filteredUsers = await User.find({_id:{$ne:loggedInUserId}}).select("-password");
        //find all the users excpet the user logged in with
        //above loggedInUserId beacuse a user should not display
        //itself in sidebar as login
        //select -passwords will all not bring the password from collection
          
        res.status(200).json(filteredUsers);

    }catch(err){
        console.log("Error in getUserForSidebar",err.message);
        res.status(500).json({error:"Internal server error"});

    }
}