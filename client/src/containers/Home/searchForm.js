import React from "react";
import { Form, Select, DatePicker } from "antd";
import { FormLabel, SubmitButton } from "./homestyle";
import { useFormik } from "formik";
import { dateFormat } from "../../helpers/constant";
import moment from "moment";

export default function SearchForm() {
  const formik = useFormik({
    initialValues: {
      city: "",
      checkIn: moment(Date.now()),
      checkOut: "",
      rooms: "",
      adults: "",
      children: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  //console.log(formik.values);

  return (
    <Form onFinish={formik.handleSubmit}>
      <FormLabel>Select City</FormLabel>
      <Form.Item>
        <Select
          name="city"
          placeholder="Please select a country"
          onChange={(value) => formik.setFieldValue("city", value)}
        >
          <Select.Option value="mumbai">Mumbai</Select.Option>
          <Select.Option value="bengaluru">Bengaluru</Select.Option>
          <Select.Option value="delhi">Delhi</Select.Option>
          <Select.Option value="hyderabad">Hyderabad</Select.Option>
          <Select.Option value="chennai">Chennai</Select.Option>
        </Select>
      </Form.Item>
      <div className="row">
        <div className="col-sm-6">
          <FormLabel>Check-In-Date</FormLabel>
          <Form.Item>
            <DatePicker
              name="checkIn"
              format={dateFormat}
              onChange={(value) => formik.setFieldValue("checkIn", moment(value).format(dateFormat))}
            />
          </Form.Item>
        </div>
        <div className="col-sm-6">
          <FormLabel>Check-Out Date</FormLabel>
          <Form.Item>
            <DatePicker
              name="checkOut"
              onChange={(value) => formik.setFieldValue("checkOut",  moment(value).format(dateFormat))}
            />
          </Form.Item>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <FormLabel>Rooms</FormLabel>
          <Form.Item>
            <Select
              name="rooms"
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
        </div>
        <div className="col-sm-4">
          <FormLabel>Adults</FormLabel>
          <Form.Item>
            <Select
              name="adults"
              placeholder="Select No of adults"
              onChange={(value) => formik.setFieldValue("adults", value)}
            >
              <Select.Option value="1">1</Select.Option>
              <Select.Option value="2">2</Select.Option>
              <Select.Option value="3">3</Select.Option>
              <Select.Option value="4">4</Select.Option>
            </Select>
          </Form.Item>
        </div>
        <div className="col-sm-4">
          <FormLabel>Children</FormLabel>
          <Form.Item>
            <Select
              name="children"
              placeholder="Select No of children"
              onChange={(value) => formik.setFieldValue("children", value)}
            >
              <Select.Option value="1">1</Select.Option>
              <Select.Option value="2">2</Select.Option>
              <Select.Option value="3">3</Select.Option>
              <Select.Option value="4">4</Select.Option>
            </Select>
          </Form.Item>
        </div>
      </div>
      <SubmitButton htmlType="submit">Book Now</SubmitButton>
    </Form>
  );
}
