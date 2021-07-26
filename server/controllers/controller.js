import HotelMessage from "../models/hotelModel.js";
import mongoose from "mongoose";

export const getHotel = async (req, res) => {
  try {
    const hotelMessages = await HotelMessage.find();
    //console.log(pMessages);
    res.status(200).json([12,3,4,5]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createHotel = async (req, res) => {
  const body = req.body;
  //console.log('received in backend', body)
  // const newPost = new HotelMessage(body);
  // try {
  //   await newPost.save();
  //   res.status(201).json(newPost);
  // } catch (error) {
  //   res.status(404).json({ message: error.message });
  // }
};
