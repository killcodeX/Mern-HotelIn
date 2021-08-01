import React from "react";
import {
  CardWrapper,
  CardHeading,
  HotelDetails,
  HotelImage,
  HotelDetailsWrapper,
  HotelName,
  HotelCity,
  HotelRating,
  BookingDetails,
  BookingWrapper,
  BookingHead,
  BookingDate,
} from "./style";
import { StarWrapper } from "../../components/UI/Pricecard/cardStyle";
import { bookingdata } from "./fakeData";
import { BsHouseDoor, BsGeo } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

export default function BookingInfo() {
  return (
    <CardWrapper>
      <CardHeading>Hotel Info</CardHeading>
      <HotelDetails>
        <HotelImage src={bookingdata.image} alt={bookingdata.name} />
        <HotelDetailsWrapper>
          <HotelName>
            <BsHouseDoor /> {bookingdata.name}
          </HotelName>
          <HotelCity>
            <BsGeo /> {bookingdata.city}
          </HotelCity>
          <HotelRating>
            {bookingdata.rating}
            <StarWrapper>
              <AiFillStar />
            </StarWrapper>
          </HotelRating>
        </HotelDetailsWrapper>
      </HotelDetails>
      <BookingDetails>
        <BookingWrapper>
          <BookingHead>Check In</BookingHead>
          <BookingDate>{bookingdata.checkIn}</BookingDate>
          <BookingHead>02:00 PM</BookingHead>
        </BookingWrapper>
        <BookingWrapper>
          <BookingHead>Check Out</BookingHead>
          <BookingDate>{bookingdata.checkOut}</BookingDate>
          <BookingHead>12:00 PM</BookingHead>
        </BookingWrapper>
        <BookingWrapper>
          <BookingHead>Guest</BookingHead>
          <BookingDate>{bookingdata.guest}</BookingDate>
          <BookingHead>1 Night</BookingHead>
        </BookingWrapper>
      </BookingDetails>
    </CardWrapper>
  );
}
