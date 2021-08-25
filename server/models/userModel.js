import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  number: { type: String, required: true },
  work: { type: String, default: "Default Work" },
  city: { type: String, default: "Default City" },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

const UserMessage = mongoose.model("UserMessage", postSchema);

export default UserMessage;
