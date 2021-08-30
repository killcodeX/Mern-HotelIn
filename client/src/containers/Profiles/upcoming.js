import React from "react";
import { Divider } from "antd";
import { AiTwotoneStar, AiOutlineUser, AiOutlineFileProtect } from "react-icons/ai";
import { BsCalendar, BsFillPeopleFill } from "react-icons/bs";
import {
  CardWrapper,
  CardUpper,
  HotelImage,
  HotelDetails,
  BookingId,
  HotelName,
  HotelCity,
  StarWrapper,
  CardLower,
  BookingDates,
  BookingDetails,
} from "./style";

export default function Upcoming() {
  return (
    <div className="container pb-4">
      <div className="row">
        <div className="col-md-6 col-sm-12 mb-4">
          <CardWrapper>
            <CardUpper>
              <HotelDetails>
                <BookingId>Booking ID: #1</BookingId>
                <HotelName>iRoomz Sri Balaji Residency</HotelName>
                <HotelCity>
                  <span>4.7</span>
                  <StarWrapper>
                    <AiTwotoneStar style={{ color: "#fad02c" }} />
                  </StarWrapper>
                  <span>- 709 Reviews</span>
                </HotelCity>
                <HotelCity>Delhi</HotelCity>
                <HotelCity>4 Nights</HotelCity>
              </HotelDetails>
              <HotelImage>
                <img
                  src={process.env.PUBLIC_URL + "/assets/banners/1.jpg"}
                  alt="hotel"
                />
              </HotelImage>
            </CardUpper>
            <Divider />
            <CardLower>
              <BookingDetails>
                <BookingDates className='pb-1'>
                  <StarWrapper>
                    <BsCalendar />
                  </StarWrapper>
                  <HotelCity>Sat Aug 01 - Sun Aug 02</HotelCity>
                </BookingDates>
                <BookingDates>
                  <StarWrapper>
                    <AiOutlineUser />
                  </StarWrapper>
                  <HotelCity>2 Rooms, 2 Guests</HotelCity>
                </BookingDates>
              </BookingDetails>
              <BookingDetails className='pt-2'>
                <BookingDates>
                  <StarWrapper>
                    <AiOutlineFileProtect />
                  </StarWrapper>
                  <HotelCity>Final Amount:</HotelCity>
                </BookingDates>
                <BookingDates>
                  <HotelCity>₹2200</HotelCity>
                </BookingDates>
              </BookingDetails>
            </CardLower>
          </CardWrapper>
        </div>
        <div className="col-md-6 col-sm-12 mb-4">
          <CardWrapper>
            <CardUpper>
              <HotelDetails>
                <BookingId>Booking ID: #2</BookingId>
                <HotelName>iRoomz Nakshatra-LR</HotelName>
                <HotelCity>
                  <span>4.2</span>
                  <StarWrapper>
                    <AiTwotoneStar style={{ color: "#fad02c" }} />
                  </StarWrapper>
                  <span> 9 Reviews</span>
                </HotelCity>
                <HotelCity>Mumbai</HotelCity>
                <HotelCity>1 Nights</HotelCity>
              </HotelDetails>
              <HotelImage>
                <img
                  src={process.env.PUBLIC_URL + "/assets/banners/3.jpg"}
                  alt="hotel"
                />
              </HotelImage>
            </CardUpper>
            <Divider />
            <CardLower>
              <BookingDetails>
                <BookingDates className='pb-1'>
                  <StarWrapper>
                    <BsCalendar />
                  </StarWrapper>
                  <HotelCity>Sat Aug 01 - Sun Aug 02</HotelCity>
                </BookingDates>
                <BookingDates>
                  <StarWrapper>
                    <AiOutlineUser />
                  </StarWrapper>
                  <HotelCity>2 Rooms, 2 Guests</HotelCity>
                </BookingDates>
              </BookingDetails>
              <BookingDetails className='pt-2'>
                <BookingDates>
                  <StarWrapper>
                    <AiOutlineFileProtect />
                  </StarWrapper>
                  <HotelCity>Final Amount:</HotelCity>
                </BookingDates>
                <BookingDates>
                  <HotelCity>₹2200</HotelCity>
                </BookingDates>
              </BookingDetails>
            </CardLower>
          </CardWrapper>
        </div>
      </div>
    </div>
  );
}
