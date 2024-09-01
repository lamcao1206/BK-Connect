import mongoose from "mongoose";

const DOCUMENT_NAME = "Chat_App";
const COLLECTION_NAME = "Users";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      maxLength: 150,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

// Export the model
export default mongoose.model(DOCUMENT_NAME, userSchema);
