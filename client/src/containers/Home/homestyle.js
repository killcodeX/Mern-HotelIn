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

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #F7F7F7;
  border-radius: 3px 0 0 3px;
  min-height: 60px;
  @media only screen and (max-width: 991px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 480px) {
    margin-top: 10px;
  }
  /* submit button style */
  button[type="submit"].ant-btn {
    min-width: 157px;
    height: 60px;
    color: #ffffff;
    background-color: #008489;
    border-radius: 0 3px 3px 0;
    border: 0;
    box-shadow: none;
    font-size: 15px;
    font-weight: 700;
    text-shadow: none;
    @media only screen and (max-width: 991px) {
      min-width: 100%;
      border-radius: 0 0 3px 3px;
    }
    @media only screen and (max-width: 480px) {
      height: 47px;
    }
    &::after {
      display: none;
    }
    &:hover {
      opacity: 0.85;
    }
  }
`;
