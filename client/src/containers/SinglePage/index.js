import React from "react";
import { Heading } from "../../components/UI/Heading";
import Details from './details';
import Review from './review';
import {
  SectionWrapper,
  ImageWrapper,
  HotelImage,
  DescWrapper,
  HeadText,
} from "./singleStyle";

import { data } from "./fakeData";

export const SingleHotel = () => {
    
  console.log(data);
  return (
    <SectionWrapper>
      <ImageWrapper>
        <HotelImage src={data.image} alt={data.name} />
      </ImageWrapper>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-7 col-sm-12">
            <Heading content={data.name} />
            <DescWrapper>{data.description}</DescWrapper>
            <HeadText>Details</HeadText>
              <Details details={data.details}/>
            <HeadText>Reviews</HeadText>
            {
              data.reviews.map(item => {
                return(
                  <Review key={item.id} data={item} />
                )
              })
            }
          </div>
          <div className="col-md-5 col-sm-12">2</div>
        </div>
      </div>
    </SectionWrapper>
  );
};
