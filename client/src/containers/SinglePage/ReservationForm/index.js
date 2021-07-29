import React from "react";
import { Form, Select, DatePicker } from "antd";
import {
  CardWrapper,
  FormWrapper,
  PriceWrapper,
  RoomPrice,
  CurrencyWrapper,
  PricePeriod,
  FormLabel,
  FormItemStyle,
  FormsubmitButton,
} from "./style";

export default function ReservationForm({ price }) {
  return (
    <CardWrapper>
      <FormWrapper pos={window.innerWidth < 500? 'auto':'absolute'}>
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
            <FormItemStyle>
              <DatePicker />
            </FormItemStyle>
          </Form.Item>
          <FormLabel>Check-Out Date</FormLabel>
          <Form.Item>
            <FormItemStyle>
              <DatePicker />
            </FormItemStyle>
          </Form.Item>
          <FormLabel>Adults</FormLabel>
          <Form.Item>
            <FormItemStyle>
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </FormItemStyle>
          </Form.Item>
          <FormLabel>Children</FormLabel>
          <Form.Item>
            <FormItemStyle>
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </FormItemStyle>
          </Form.Item>
          <FormsubmitButton>Book Now</FormsubmitButton>
        </Form>
      </FormWrapper>
    </CardWrapper>
  );
}
