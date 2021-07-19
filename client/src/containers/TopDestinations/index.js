import React from "react";
import { Heading } from "../../components/UI/Heading";
import { SectionWrapper } from "./destStyle";
import { data } from "./fakeData";
import { Card } from "../../components/UI/card";

export default function Destinations() {
  return (
    <SectionWrapper>
      <div className="container">
        <Heading content="Destinations" />
        <div className="row">
          {data.map((item) => {
            return (
              <div className={`col-md-6 col-sm-12 pt-4 ${item.id === 5? `mx-auto`:''}`}>
                <Card key={item.id} name={item.name} image={item.image} />
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
