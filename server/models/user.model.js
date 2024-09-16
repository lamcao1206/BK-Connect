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

userSchema.post("save", function (doc, next) {
  console.log("New user was created and save", doc);
  next();
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.comparePassword = async function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model(DOCUMENT_NAME, userSchema);
