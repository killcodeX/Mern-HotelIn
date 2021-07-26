import React from "react";
import { Heading } from "../../components/UI/Heading";
import { Card } from "../../components/UI/Pricecard";
import { SectionWrapper } from "./hotelStyle";
import { data } from "../../fakeData";

export default function Hotels() {
  return (
    <SectionWrapper>
      <div className="container">
        <Heading content="Homes guests love" />
        <div className="row pt-4">
          {data.map((item) => {
            return (
              <div className="col-md-4 col-sm-12 pt-4">
                <Card
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  city={item.city}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  totalReview={item.totalReview}
                />
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
