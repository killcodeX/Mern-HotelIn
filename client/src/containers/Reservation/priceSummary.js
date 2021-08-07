import React from "react";
import { PriceData } from "./fakeData";
import {
  CardWrapper,
  CardHeading,
  PriceWrapper,
  PriceSum,
  PriceText,
  DiscountWrapper,
  BookingButton,
} from "./style";

export default function PriceSummary({hotelPrice}) {
  return (
    <CardWrapper>
      <CardHeading>Price Summary</CardHeading>
      <PriceWrapper>
        <PriceSum>
          <PriceText>
            Base Price{" "}
          </PriceText>
          <PriceText>{`₹ ${hotelPrice.price}`}</PriceText>
        </PriceSum>
      </PriceWrapper>
      <PriceWrapper>
        <PriceSum>
          <PriceText>{`Room Charges (${hotelPrice.rooms} ${
            hotelPrice.rooms > 1 ? "rooms" : "room"
          } x ${hotelPrice.nights} ${
            hotelPrice.nights > 1 ? "nights" : "night"
          })`}</PriceText>
          <PriceText>{`₹ ${hotelPrice.roomNnight}`}</PriceText>
        </PriceSum>
        <PriceSum>
          <PriceText>
            Total Discounts{" "}
            <DiscountWrapper>{`${hotelPrice.discount}% off`}</DiscountWrapper>
          </PriceText>
          <PriceText>{`- ₹ ${hotelPrice.discountPrice}`}</PriceText>
        </PriceSum>
      </PriceWrapper>
      <PriceWrapper>
        <PriceSum>
          <PriceText>Price after discounts</PriceText>
          <PriceText>{`₹ ${hotelPrice.roomNnight - hotelPrice.discountPrice}`}</PriceText>
        </PriceSum>
        <PriceSum>
          <span className='d-flex flex-column'>
            <PriceText>Taxes & Fees</PriceText>
            <PriceText>(inclusive of all taxes)</PriceText>
          </span>
          <PriceText>{`+ ₹ ${hotelPrice.tax}`}</PriceText>
        </PriceSum>
      </PriceWrapper>
      <PriceWrapper>
        <PriceSum>
          <PriceText>Payble Amount</PriceText>
          <PriceText>{`₹ ${hotelPrice.totalAmount}`}</PriceText>
        </PriceSum>
      </PriceWrapper>
      <BookingButton variant="primary">Book Now</BookingButton>
    </CardWrapper>
  );
}
