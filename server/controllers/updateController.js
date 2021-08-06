import HotelMessage from "../models/hotelModel.js";
import mongoose from "mongoose";

// PTACH Controllers

export const updateHotel = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No Code Snippet with that Id");

  const update = await HotelMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });

  res.json(update);
};
