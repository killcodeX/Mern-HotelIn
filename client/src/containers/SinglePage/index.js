import React from "react";
import { Heading } from "../../components/UI/Heading";
import {
  SectionWrapper,
  ImageWrapper,
  HotelImage,
  DescWrapper,
  HeadText,
} from "./singleStyle";
import {
  FaBed,
  FaDelicious,
  FaUmbrellaBeach,
  FaTv,
  FaUserAlt,
} from "react-icons/fa";
import { data } from "./fakeData";

export const SingleHotel = () => {
    const iconStyle = {
        color:'#008489',
        fontSize:'20px',
        paddingRight:'5px'
    }
  console.log(data);
  return (
    <SectionWrapper>
      <ImageWrapper>
        <HotelImage src={data.image} alt={data.name} />
      </ImageWrapper>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-7 col-sm-12">
            <Heading content={data.name} />
            <DescWrapper>{data.description}</DescWrapper>
            <HeadText>Details</HeadText>
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th scope="row">
                    <FaUserAlt style={iconStyle} /> Adults
                  </th>
                  <td>{data.details.adults}</td>
                </tr>
                <tr>
                  <th scope="row">
                    <FaTv style={iconStyle} /> Amenities
                  </th>
                  <td>{data.details.ameties}</td>
                </tr>
                <tr>
                  <th scope="row">
                    <FaUmbrellaBeach style={iconStyle} /> View
                  </th>
                  <td>{data.details.view}</td>
                </tr>
                <tr>
                  <th scope="row">
                    <FaDelicious style={iconStyle} /> Size
                  </th>
                  <td>{data.details.size}</td>
                </tr>
                <tr>
                  <th scope="row">
                    <FaBed style={iconStyle} /> Bed Type
                  </th>
                  <td>{data.details.bedType}</td>
                </tr>
              </tbody>
            </table>
            <HeadText>Reviews</HeadText>
          </div>
          <div className="col-md-5 col-sm-12">2</div>
        </div>
      </div>
    </SectionWrapper>
  );
};
