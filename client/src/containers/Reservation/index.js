import React from "react";
import { Heading } from "../../components/UI/Heading";
import { SectionWrapper } from "./style";
import BookingInfo from "./bookingInfo";
import PriceSummary from "./priceSummary";

export default function Reservation() {
  return (
    <SectionWrapper>
      <div className="container">
        <Heading content="Booking Confirmation" />
        <div className='mt-5 row'>
            <div className='col-md-7'>
                <BookingInfo/>
            </div>
            <div className='col-md-5'>
              <PriceSummary/>
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
