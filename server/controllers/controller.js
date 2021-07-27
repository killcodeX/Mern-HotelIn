import HotelMessage from "../models/hotelModel.js";
import mongoose from "mongoose";

export const getHotel = async (req, res) => {
  try {
    const hotelMessages = await HotelMessage.find();
    //console.log(pMessages);
    res.status(200).json(hotelMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createHotel = async (req, res) => {
  const body = req.body;
  //console.log('received in backend', body)
  const newPost = new HotelMessage(body);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateHotel = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No Code Snippet with that Id");

  const update = await HotelMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });

  res.json(update);
}
