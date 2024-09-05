import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const DOCUMENT_NAME = "User";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      trim: true,
      maxLength: 150,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      maxLength: 150,
      unique: true,
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
  }
);

// Fire a function after doc saved to db
userSchema.post("save", function (doc, next) {
  console.log("New user was created and save", doc);
  next();
});

// Fire a function before doc saved to db
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Export the model
export default mongoose.model(DOCUMENT_NAME, userSchema);
