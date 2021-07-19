import React from "react";
import { AiFillStar } from "react-icons/ai";
import {
  CardWrapper,
  ImageWrapper,
  CardDetails,
  CityWrapper,
  NameWrapper,
  PriceWrapper,
  ReviewWrapper,
  RatingWrapper,
  StarWrapper,
} from "./cardStyle";

export const Card = (props) => {
  const { name, city, image, price, rating } = props;
  return (
    <CardWrapper>
      <ImageWrapper src={image} alt={name} />
      <CardDetails>
        <NameWrapper>{name}</NameWrapper>
        <CityWrapper>{city}</CityWrapper>
        <ReviewWrapper>
          <PriceWrapper>{`Starting from ${price}`}</PriceWrapper>
          <RatingWrapper>
            {rating}
            <StarWrapper>
              <AiFillStar />
            </StarWrapper>
          </RatingWrapper>
        </ReviewWrapper>
      </CardDetails>
    </CardWrapper>
  );
};
