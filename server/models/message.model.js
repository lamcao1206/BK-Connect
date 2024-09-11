import mongoose from "mongoose";

const DOCUMENT_NAME = "Message";

const messageSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      maxLength: 300,
      trim: true,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model(DOCUMENT_NAME, messageSchema);

export default Message;
