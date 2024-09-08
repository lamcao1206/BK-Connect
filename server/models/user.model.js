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

// Hash the password before saving the user
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     console.log("hashed!");
//     return next();
//   }
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// Compare password method
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Export the model
export default mongoose.model(DOCUMENT_NAME, userSchema);
