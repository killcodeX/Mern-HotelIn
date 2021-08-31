import HotelMessage from "../models/hotelModel.js";
import UserMessage from "../models/userModel.js";
import mongoose from "mongoose";
import {
  numberOfNights,
  roomNightPrice,
  calDiscount,
  findTax,
  calPrice,
} from "../helpers/helper.js";
import shortid  from "shortid";
import { razorpay } from "../index.js"

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

  let totalNights = numberOfNights(checkIn, checkOut);
  let roomNnight = roomNightPrice(singleHotel.price, rooms, totalNights);
  let discount = Math.floor(Math.random() * (10, 60) + 1);
  let discountPrice = calDiscount(singleHotel.price, discount);
  let totalTax = findTax(singleHotel.price);
  let totalPrice = calPrice(
    totalNights,
    singleHotel.price,
    rooms,
    discountPrice,
    totalTax
  );

  let result = {
    hotelDetails: {
      _id: singleHotel._id,
      name: singleHotel.name,
      image: singleHotel.image,
      city: singleHotel.city,
      rating: singleHotel.rating,
      checkIn: checkIn,
      checkOut: checkOut,
      rooms: rooms,
      guest: parseInt(adults) + parseInt(children),
      nights: totalNights,
    },
    priceDetails: {
      roomNnight: roomNnight,
      rooms: rooms,
      guest: parseInt(adults) + parseInt(children),
      nights: totalNights,
      price: singleHotel.price,
      discount: discount,
      discountPrice: discountPrice,
      tax: totalTax,
      totalAmount: totalPrice,
    },
  };
  try {
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: "No Hotels at these dates" });
  }
};

// process order
export const handlePayment = async (req, res) => {
  console.log('called')
  try {
    const existingUser = await UserMessage.findById(req.userId);
    const payment_capture = 1;
    const amount = 499;
    const currency = "INR";
    const options = {
      amount: amount * 100,
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };
    const response = await razorpay.orders.create(options)
    let data = {
      ...response,
      name:existingUser.fname+" "+existingUser.lname,
      email:existingUser.email,
      mobile:existingUser.mobile
    }
    res.status(200).json(data);
  } catch (error) {
    console.log(error)
    res.status(404).json({ message: error });
  }
};
