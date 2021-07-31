import React, { useState } from "react";
import { SectionWrapper, CityWrapper } from "./destStyle";
import { Heading } from "../../components/UI/Heading";
import { Text } from "../../components/UI/Text";
import { Card } from "../../components/UI/Pricecard";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { FormLabel } from "../Home/homestyle";
import { Form, Select } from "antd";

export default function Cities() {
  const param = useParams();
  const state = useSelector((state) => state.Hotels.allHotels);
  const [data, setData] = useState(state.filter((state) => state.city == param.id))

  const handleFilter = (data) => {
    if (data == "ah") {
    } else if (data == "plh") {
    } else if (data == "phl") {
    } else if (data == "rlh") {
    } else if (data == "rhl") {
    }
  };

  //if(data == [])

  return (
    <SectionWrapper>
      <div className="container">
        <CityWrapper>
          <div className="">
            <Heading
              content={`Hotels, Villas, Apartments and more in ${param.id}`}
            />
            <Text content="Get hotels of your choice" />
          </div>
          <div className="">
            <FormLabel>Sort By</FormLabel>
            <Form.Item style={{ width: "200px" }}>
              <Select
                placeholder="All Hotels"
                onChange={(data) => handleFilter(data)}
              >
                <Select.Option value="ah">All Hotels</Select.Option>
                <Select.Option value="plh">Price - Low to High</Select.Option>
                <Select.Option value="phl">Price - High to low</Select.Option>
                <Select.Option value="rlh">Rating - Low to High</Select.Option>
                <Select.Option value="rhl">Rating - High to Low</Select.Option>
              </Select>
            </Form.Item>
          </div>
        </CityWrapper>
        <div className="row pt-4">
          {data.map((item) => {
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
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
