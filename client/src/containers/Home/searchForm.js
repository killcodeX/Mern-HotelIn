import React from "react";
import { Form, Input, Select, DatePicker } from "antd";
import { FormLabel, SubmitButton } from "./homestyle";
import { useFormik } from "formik";

export default function SearchForm() {
  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //     profession: "",
  //     email: "",
  //     mobile: "",
  //     password: "",
  //     confirmPassword: "",
  //     address: "",
  //     terms: false,
  //   },
  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });

  return (
    <Form>
      <FormLabel>Select City</FormLabel>
      <Form.Item>
        <Select placeholder="Please select a country">
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
            <DatePicker />
          </Form.Item>
        </div>
        <div className="col-sm-6">
          <FormLabel>Check-Out Date</FormLabel>
          <Form.Item>
            <DatePicker />
          </Form.Item>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <FormLabel>Rooms</FormLabel>
          <Form.Item>
            <Select placeholder="Select No of rooms">
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
            <Select placeholder="Select No of rooms">
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
            <Select placeholder="Select No of children">
              <Select.Option value="1">1</Select.Option>
              <Select.Option value="2">2</Select.Option>
              <Select.Option value="3">3</Select.Option>
              <Select.Option value="4">4</Select.Option>
            </Select>
          </Form.Item>
        </div>
      </div>
      <SubmitButton type="submit">Book Now</SubmitButton>
    </Form>
  );
}
