import React from "react";
import { CardWrapper } from "../../components/UI/card/cardstyle";
import { CardUpper, HotelImage, HotelDetails } from "./style";

export default function Upcoming() {
  return (
    <div className="container pb-4">
      <div className="row">
        <div className="col-md-6 col-sm-12 mb-4">
          <CardWrapper>
            <CardUpper>
              <HotelImage>
                <img
                  src={process.env.PUBLIC_URL + "/assets/banners/1.jpg"}
                  alt="hotel"
                />
              </HotelImage>
              <HotelDetails>HI</HotelDetails>
            </CardUpper>
          </CardWrapper>
        </div>
        <div className="col-md-6 col-sm-12 mb-4">
          <CardWrapper>
            <CardUpper>
              <HotelImage>
                <img
                  src={process.env.PUBLIC_URL + "/assets/banners/3.jpg"}
                  alt="hotel"
                />
              </HotelImage>
              <HotelDetails>HI</HotelDetails>
            </CardUpper>
          </CardWrapper>
        </div>
      </div>
    </div>
  );
}
