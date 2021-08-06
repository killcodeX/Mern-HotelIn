import React, { useState } from "react";
import { Form, Select, DatePicker } from "antd";
import { useFormik } from "formik";
import { dateFormat } from "../../../helpers/constant";
import moment from "moment";
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

export default function ReservationForm({ price, id }) {
  function disabledDate(current) {
    if (formik.values.checkIn) {
      return current && current < moment(formik.values.checkIn, dateFormat);
    } else {
      let customDate = moment(Date.now()).format(dateFormat);
      return current && current < moment(customDate, dateFormat);
    }
  }

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      hotelId: id, //hotelID,
      checkIn: "",
      checkOut: "",
      rooms: "",
      adults: "",
      children: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <CardWrapper pos={window.innerWidth < 500 ? "auto" : "absolute"}>
      <FormWrapper>
        <PriceWrapper>
          <RoomPrice>
            <CurrencyWrapper>₹</CurrencyWrapper>
            {price}
          </RoomPrice>
          <PricePeriod>per night</PricePeriod>
        </PriceWrapper>
        <Form onFinish={formik.handleSubmit}>
          <FormLabel>Check-In-Date</FormLabel>

          <Form.Item
            name="checkIn"
            hasFeedback
            rules={[
              { required: true, message: "Please Select Check In Date!" },
            ]}
          >
            <DatePicker
              allowClear
              format={dateFormat}
              disabledDate={disabledDate}
              onChange={(value) =>
                formik.setFieldValue(
                  "checkIn",
                  moment(value).format(dateFormat)
                )
              }
            />
          </Form.Item>

          <FormLabel>Check-Out Date</FormLabel>
          <Form.Item
            name="checkOut"
            hasFeedback
            rules={[
              { required: true, message: "Please Select Check Out Date!" },
            ]}
          >
            <DatePicker
              allowClear
              disabledDate={disabledDate}
              onChange={(value) =>
                formik.setFieldValue(
                  "checkOut",
                  moment(value).format(dateFormat)
                )
              }
            />
          </Form.Item>

          <FormLabel>Rooms</FormLabel>
          <Form.Item
            name="rooms"
            hasFeedback
            rules={[{ required: true, message: "Please Select no of Rooms!" }]}
          >
            <Select
              allowClear
              placeholder="Select No of rooms"
              onChange={(value) => formik.setFieldValue("rooms", value)}
            >
              <Select.Option value="1">1</Select.Option>
              <Select.Option value="2">2</Select.Option>
              <Select.Option value="3">3</Select.Option>
              <Select.Option value="4">4</Select.Option>
              <Select.Option value="5">5</Select.Option>
            </Select>
          </Form.Item>
          <FormLabel>Adults</FormLabel>
          <Form.Item
            name="adults"
            hasFeedback
            rules={[{ required: true, message: "Please Select no of Adults!" }]}
          >
            <Select
              allowClear
              placeholder="Select No of adults"
              onChange={(value) => formik.setFieldValue("adults", value)}
            >
              <Select.Option value="1">1</Select.Option>
              <Select.Option value="2">2</Select.Option>
              <Select.Option value="3">3</Select.Option>
              <Select.Option value="4">4</Select.Option>
            </Select>
          </Form.Item>
          <FormLabel>Children</FormLabel>
          <Form.Item
            name="children"
            hasFeedback
            rules={[
              { required: true, message: "Please Select no of children!" },
            ]}
          >
            <Select
              allowClear
              placeholder="Select No of children"
              onChange={(value) => formik.setFieldValue("children", value)}
            >
              <Select.Option value="0">None</Select.Option>
              <Select.Option value="1">1</Select.Option>
              <Select.Option value="2">2</Select.Option>
              <Select.Option value="3">3</Select.Option>
              <Select.Option value="4">4</Select.Option>
            </Select>
          </Form.Item>
          <FormsubmitButton>Search</FormsubmitButton>
        </Form>
      </FormWrapper>
    </CardWrapper>
  );
}
