import HotelMessage from "../models/hotelModel.js";
import BookingMessage from "../models/bookingModel.js";
import mongoose from "mongoose";

// GET Controllers

export const getHotel = async (req, res) => {
  try {
    const hotelMessages = await HotelMessage.find();
    //console.log(pMessages);
    res.status(200).json(hotelMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getSingleHotel = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Hotel with that Id");
  try {
    const singleHotel = await HotelMessage.findById(id);
    //console.log(singleHotel);
    res.status(200).json(singleHotel);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCityHotel = async (req, res) => {
  const { city } = req.params;
  try {
    let result = await HotelMessage.find({ city: city });
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getBookings = async (req, res) => {
  console.log('called for booking')
  try {
    const result = await BookingMessage.find().populate("hotelId", "name image city rating totalReview");
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
