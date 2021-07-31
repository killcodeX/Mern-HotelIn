import React from "react";
import { SectionWrapper } from "./destStyle";
import { Heading } from "../../components/UI/Heading";
import { Text } from "../../components/UI/Text";
import { Card } from "../../components/UI/Pricecard";

export default function Cities() {
  return (
    <SectionWrapper>
      <div className="container">
        <Heading content="Homes guests love" />
        <Text content="Get hotels of your choice" />
        <div className="row pt-4">
            hi
          {/* {state.map((item) => {
            return (
              <div key={item._id} className="col-md-4 col-sm-12 pt-4">
                <Card
                  id={item._id}
                  name={item.name}
                  city={item.city}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  totalReview={item.totalReview}
                />
              </div>
            );
          })} */}
        </div>
      </div>
    </SectionWrapper>
  );
}
