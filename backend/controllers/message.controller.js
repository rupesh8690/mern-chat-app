import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { io,getReceiverSocketId } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try {
    // Extract the message from the request body
    const { message } = req.body;

    // Extract the receiverId from the request parameters (URL)
    const { id: receiverId } = req.params;

    // The senderId comes from the authenticated user stored in req.user (set by the protectRoute middleware)
    const senderId = req.user._id;

    // Check if a conversation already exists between the sender and receiver using their IDs
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] }, // Ensure both sender and receiver are participants
    });

    // If no conversation exists, create a new conversation between the sender and receiver
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId], // Participants of the new conversation
        // No need to specify 'message' here as it is defined as an empty array by default in the schema
      });
    }

    // Create a new message object with senderId, receiverId, and the actual message
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      // After saving the new message, push its _id to the conversation's messages array
      conversation.messages.push(newMessage._id); // Use the `conversation` object here, not the `Conversation` model
    }
 

    // await newMessage.save();
    // await conversation.save();

    // Save the conversation and new message concurrently using Promise.all()
    // Both operations are independent, so they can be run in parallel to improve performance.
    // This ensures both the conversation and the new message are saved at the same time.
    await Promise.all([conversation.save(), newMessage.save()]);

       //socket io functionality will go here
       const receiverSocketId= getReceiverSocketId(receiverId);
       if(receiverId){
        //io.to(<Socket_id>).emit() used to send events to specific client
        io.to(receiverSocketId).emit("newMessage",newMessage)
       }

    // Send the newly created message as a response with status code 201 (Created)
    res.status(201).json(newMessage);
  } catch (err) {
    // Catch and log any errors that occur in the process
    console.log("Error in sendMessages Controller", err.message); // Fixed typo in 'message'

    // Return a 500 Internal Server Error response in case of error
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessage= async (req,res) =>{
  try{
    const {id:userToChatId} =req.params;
    const senderId = req.user._id;//coming from protect route
    const conversation= await Conversation.findOne({
      participants:{$all:[senderId,userToChatId]},

    }).populate("messages");//not reference but actual messages

    if(!conversation) return res.status(200).json([]);//if conversation not exists return 
    //an empty array

    
    

    res.status(200).json(conversation.messages);
  }catch(err){
    console.log("Erros occured in getmessage controller");
    res.status(500).json({error:'internal server error'});

  }
}