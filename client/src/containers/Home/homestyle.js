import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background-color: rgb(255, 255, 255);
  top: -82px;
  z-index: -1;

  @media (max-width: 480px) {
    min-height: 80vh;
  }
`;

export const BannerWrapper = styled.div`
  background: url(${process.env.PUBLIC_URL + "/assets/banners/3.jpg"}) no-repeat
    center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  padding-top: 90px;
  &:after {
    display: block;
    content: "";
    width: 100%;
    height: 60%;
    position: absolute;
    bottom: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
    pointer-events: none;
    z-index: 0;
  }
`;

export const SearchWrapper = styled.div`
  width: calc(100% - 60px);
  padding: 28px 30px 30px;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.08);
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  @media only screen and (min-width: 569px) and (max-width: 991px) {
    width: 414px;
    left: 30px;
    transform: translateY(-50%);
  }
  @media only screen and (max-width: 480px) {
    width: calc(100% - 30px);
    padding: 15px;
    // left: 15px;
    > p {
      display: none;
    }
  }
  > div {
    @media only screen and (min-width: 481px) {
      margin-top: 30px;
    }
  }
  h2 {
    margin-bottom: 10px;
  }
`;
