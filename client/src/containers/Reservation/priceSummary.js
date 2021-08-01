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

export default function PriceSummary() {
  const discountCal = (price, dis) => {
    let discount = Math.floor((price * dis) / 100);
    return discount;
  };
  return (
    <CardWrapper>
      <CardHeading>Price Summary</CardHeading>
      <PriceWrapper>
        <PriceSum>
          <PriceText>{`Room Charges (${PriceData.rooms} ${
            PriceData.rooms > 1 ? "rooms" : "room"
          } x ${PriceData.nights} ${
            PriceData.nights > 1 ? "nights" : "night"
          })`}</PriceText>
          <PriceText>{`₹ ${PriceData.price}`}</PriceText>
        </PriceSum>
        <PriceSum>
          <PriceText>
            Total Discounts{" "}
            <DiscountWrapper>{`${PriceData.discount}% off`}</DiscountWrapper>
          </PriceText>
          <PriceText>{`- ₹ ${discountCal(
            PriceData.price,
            PriceData.discount
          )}`}</PriceText>
        </PriceSum>
      </PriceWrapper>
      <PriceWrapper>
        <PriceSum>
          <PriceText>Price after discounts</PriceText>
          <PriceText>₹2800</PriceText>
        </PriceSum>
        <PriceSum>
          <span className='d-flex flex-column'>
            <PriceText>Taxes & Fees</PriceText>
            <PriceText>(inclusive of all taxes)</PriceText>
          </span>
          <PriceText>{`+ ₹ ${PriceData.tax}`}</PriceText>
        </PriceSum>
      </PriceWrapper>
      <PriceWrapper>
        <PriceSum>
          <PriceText>Payble Amount</PriceText>
          <PriceText>₹2800</PriceText>
        </PriceSum>
      </PriceWrapper>
      <BookingButton variant="primary">Book Now</BookingButton>
    </CardWrapper>
  );
}
