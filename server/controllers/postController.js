import HotelMessage from "../models/hotelModel.js";
import mongoose from "mongoose";
import { numberOfNights, calPrice } from "../helpers/helper.js";

// POST Controllers

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

export const searchHotel = async (req, res) => {
  let searchData = req.body;
  console.log("Data recieved", searchData);
  let result = await HotelMessage.find({ city: searchData.city });
  let val = [];
  while (val.length < 3) {
    let rand = Math.floor(Math.random() * (0, 5) + 1);
    if (!val.includes(rand)) {
      val.push(rand);
    }
  }
  let popHotel = [];
  for (let i = 0; i < val.length; i++) {
    popHotel.push(result[val[i]]);
  }

  try {
    res.status(200).json(popHotel);
  } catch (error) {
    res.status(404).json({ message: "No Hotels at these dates" });
  }
};

export const bookHotel = async (req, res) => {
  const { hotelId, checkIn, checkOut, rooms, adults, children } = req.body;

  if (!mongoose.Types.ObjectId.isValid(hotelId))
    return res.status(404).send("No Hotel with that Id");

  const singleHotel = await HotelMessage.findById(hotelId);
  console.log(singleHotel);

  let result = {
    _id: singleHotel._id,
    name: singleHotel.name,
    image: singleHotel.image,
    city: singleHotel.city,
    rating: singleHotel.rating,
    checkIn: checkIn,
    checkOut: checkOut,
    rooms: rooms,
    guest: adults + children,
    nights: numberOfNights(checkIn, checkOut),
    discount: Math.floor(Math.random() * (10, 60) + 1),
    tax: findTax(singleHotel.price),
  };
  try {
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: "No Hotels at these dates" });
  }
};
