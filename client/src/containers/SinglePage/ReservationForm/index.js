import React from "react";
import {
  CardWrapper,
  FormWrapper,
  PriceWrapper,
  RoomPrice,
  CurrencyWrapper,
  PricePeriod,
  FormLabel,
  FormsubmitButton,
} from "./style";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";

export default function ReservationForm({ price }) {
  return (
    <CardWrapper>
      <FormWrapper>
        <PriceWrapper>
          <RoomPrice>
            <CurrencyWrapper>$</CurrencyWrapper>
            {price}
          </RoomPrice>
          <PricePeriod>per night</PricePeriod>
        </PriceWrapper>
        <Form layout="horizontal">
          <FormLabel>Check-In Date</FormLabel>
          <Form.Item>
            <DatePicker style={{ width: "290px", height: "40px" }} />
          </Form.Item>
          <FormLabel>Check-Out Date</FormLabel>
          <Form.Item>
            <DatePicker style={{ width: "290px", height: "40px" }} />
          </Form.Item>
          <FormLabel>Adults</FormLabel>
          <Form.Item>
            <Select style={{ width: "290px", height: "40px" }}>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <FormLabel>Children</FormLabel>
          <Form.Item>
            <Select style={{ width: "290px", height: "40px" }}>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <FormsubmitButton>Book Now</FormsubmitButton>
        </Form>
      </FormWrapper>
    </CardWrapper>
  );
}
