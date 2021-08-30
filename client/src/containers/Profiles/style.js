import styled from "styled-components";

export const SectionWrapper = styled.section`
  padding: 52px 0;
`;

export const HeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 40px 0;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const UserDetails = styled.div`
  padding-left: 20px;
`;

export const UserName = styled.div`
  font-size: 30px;
  color: #333;
`;

export const UserEmail = styled.div`
  font-size: 15px;
  color: #999;
`;

export const CardUpper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const HotelImage = styled.div`
  width: 140px;
  height: 140px;
  overflow: hidden;
  border-radius: 5%;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const HotelDetails = styled.div``;




// disclamer section

export const DisclaimerText = styled.div`
  font-size:25px;
  width:50%;
`;

export const BookButton = styled.div``