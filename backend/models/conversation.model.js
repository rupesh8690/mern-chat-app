import mongoose from "mongoose";

// Define the schema for the conversation
const conversationSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Refers to the "User" model for participants
      }
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message", // Refers to the "Message" model for storing message IDs
        default: [], // Default to an empty array if no messages are present
      }
    ]
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Create the Conversation model based on the schema
const Conversation = mongoose.model("Conversation", conversationSchema);

// Export the Conversation model
export default Conversation;
