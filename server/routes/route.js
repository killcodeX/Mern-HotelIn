import express from "express";
import { createUser, loginUser } from "../controllers/userController.js";
import {
  getHotel,
  getSingleHotel,
  getCityHotel,
} from "../controllers/getController.js";

import {
  createHotel,
  searchHotel,
  bookHotel,
  handlePayment,
} from "../controllers/postcontroller.js";

import { updateHotel } from "../controllers/updateController.js";

import { AuthenticateToken } from "../middleware/tokenValidate.js";

const router = express.Router();

// User Routes
router.post("/signup", createUser);
router.post("/signin", loginUser); //AuthenticateToken,

// get hotel
router.get("/", getHotel);
router.get("/:id", getSingleHotel);
router.get("/city/:city", getCityHotel);

// post hotel
router.post("/", createHotel);
router.post("/search", searchHotel);
router.post("/book-hotel", bookHotel);
router.post("/payment", AuthenticateToken, handlePayment);

// for update hotel
router.patch("/:id", updateHotel);

export default router;
