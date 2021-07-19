import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 300px;
  border-radius: 6px;
  margin-right: 20px;
  overflow: hidden;
  transition: box-shadow 0.3s;
  box-shadow: 0 13px 43px 0 rgb(37 46 89 / 10%);
`;

export const ImageWrapper = styled.img`
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CardDetails = styled.div`
  padding: 10px 16px;
`;
//border: 1px solid #e6e6e6;
export const NameWrapper = styled.h3`
  color: #2c2c2c;
  font-size: 19px;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CityWrapper = styled.p`
  color: #909090;
  font-size: 13px;
  font-weight: 400;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0 !important;
`;

export const PriceWrapper = styled.p`
  font-size: 15px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 0;
  margin-top: 8px;
`;

export const ReviewWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RatingWrapper = styled.div`
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 0;
  margin-top: 8px;
`;

export const StarWrapper = styled.span`
  color:#FAD02C;
  font-size:20px;
  padding-left:5px;
`;
