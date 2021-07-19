import React from "react";
import { Heading } from "../../components/UI/Heading";
import { SectionWrapper } from "./destStyle";

export default function Destinations() {
  return (
    <SectionWrapper>
      <div className="container">
        <Heading content="Destinations" />
      </div>
    </SectionWrapper>
  );
}
