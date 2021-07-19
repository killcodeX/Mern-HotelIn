import React from "react";
import { BannerWrapper, HomeWrapper, SearchWrapper } from "./homestyle.js";
import { Heading } from "../../components/UI/Heading";
import { Text } from "../../components/UI/Text";
import SearchForm from './searchForm'

export default function Home() {
  return (
    <HomeWrapper>
      <BannerWrapper>
        <SearchWrapper>
          <Heading content="Latest reviews. Lowest prices." />
          <Text content=" Get best prices for all our Hotels in all over India. Don't miss out
          on good living." />
          <SearchForm />
        </SearchWrapper>
      </BannerWrapper>
    </HomeWrapper>
  );
}
