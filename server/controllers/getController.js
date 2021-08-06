import HotelMessage from "../models/hotelModel.js";
import mongoose from "mongoose";

// GET Controllers

export const getHotel = async (req, res) => {
  console.log("called");
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
  console.log("id received in backend", id);

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
  console.log("city hotel --> ", req.params);
  try {
    let result = await HotelMessage.find({ city: city });
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
