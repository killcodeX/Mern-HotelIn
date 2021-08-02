import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const BannerWrapper = styled.div`
  position: fixed;
  top: 0;
  left:50%;
  background: url(${process.env.PUBLIC_URL + "/assets/banners/1.jpg"}) no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
`;
