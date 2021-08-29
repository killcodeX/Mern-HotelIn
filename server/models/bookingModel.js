import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
  hotelId: { type: ObjectId, required: true },
  price: { type: String, required: true },
  totalAmount: { type: String, required: true },
  userId: { type: ObjectId, required: true },
  checkIn: { type: String, required: true },
  checkOut: { type: String, required: true },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

const UserMessage = mongoose.model("BookingMessage", postSchema);

export default UserMessage;
