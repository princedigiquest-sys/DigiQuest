import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },

  mobile: {
    type: String,
    required: true,
  },

  course: {
    type: String,
    required: true,
    trim: true,
  },
});

// Email + Course combination should be unique
userSchema.index({ email: 1, course: 1 }, { unique: true });

const User = mongoose.model("User", userSchema);

export default User;