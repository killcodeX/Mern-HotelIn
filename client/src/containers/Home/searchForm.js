import React from "react";
import { FormWrapper, ComponentWrapper, FormInput } from "./homestyle";
import { FaMapMarkerAlt, FaRegCalendar, FaUserFriends } from "react-icons/fa";
import { Button } from "antd";
import { useFormik } from "formik";

export default function SearchForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      profession: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      address: "",
      terms: false,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <FormWrapper>
      {/* for cities input */}
      <ComponentWrapper>
        <FaMapMarkerAlt />
        <FormInput type="text" placeholder="Search cities.." />
      </ComponentWrapper>
      {/* for starting dates */}
      <ComponentWrapper>
        <FormInput type="date" placeholder="Search cities.." />
      </ComponentWrapper>
        {/* for ending dates */}
      <ComponentWrapper>
        <FormInput type="date" placeholder="Search cities.." />
      </ComponentWrapper>
      {/*  for rooms */}
      <ComponentWrapper>
        <FaUserFriends />
        <FormInput placeholder="Search cities.." />
      </ComponentWrapper>
      <Button type="primary" htmlType="submit" size="large">
        Find Hotels
      </Button>
    </FormWrapper>
  );
}
