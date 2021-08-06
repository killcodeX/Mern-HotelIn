import express from "express";
import {
  getHotel,
  getSingleHotel,
  getCityHotel,
} from "../controllers/getController.js";

import {
  createHotel,
  searchHotel,
  bookHotel,
} from "../controllers/postcontroller.js";

import { updateHotel } from "../controllers/updateController.js";

const router = express.Router();

// get hotel
router.get("/", getHotel);
router.get("/:id", getSingleHotel);
router.get("/city/:city", getCityHotel);

// post hotel
router.post("/", createHotel);
router.post("/search", searchHotel);
router.post("/book-hotel", bookHotel);

// for update hotel
router.patch("/:id", updateHotel);

export default router;
