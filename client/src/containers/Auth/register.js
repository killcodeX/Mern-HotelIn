import React from "react";
import { Form, Input } from "antd";
import { FormLabel, SubmitButton } from "../Home/homestyle";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import {
  Wrapper,
  BannerWrapper,
  FormWrapper,
  CardWrapper,
  CardUpper,
  HotelTag,
  TitleTag,
  LogoWrapper,
  AuthFooter,
  AuthPrivacy,
} from "./style";

export default function Register() {
    const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        onSubmit: (values) => {
          console.log(values);
        },
      });
  return (
    <Wrapper className="container-fluid">
      <div className="row">
        <FormWrapper className="col-sm-6">
          <CardWrapper>
            <CardUpper>
              <LogoWrapper>
                <img
                  src={process.env.PUBLIC_URL + "/assets/logo-black.png"}
                  alt="hotel.in"
                />
              </LogoWrapper>
              <HotelTag>
                Raising Comfort to the highest level, Our Hotels & Resorts
                remain stylish, modern, forward thinking global leader of
                hospitality.
              </HotelTag>
              <TitleTag>Register</TitleTag>
            </CardUpper>
            <Form onFinish={formik.handleSubmit}>
              <FormLabel>Email</FormLabel>
              <Form.Item
                name="email"
                hasFeedback
                rules={[
                  { required: true, message: "Please Select your city!" },
                ]}
              >
                <Input
                  type="email"
                  placeholder="enter your email.."
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </Form.Item>
              <FormLabel>Password</FormLabel>
              <Form.Item
                name="password"
                hasFeedback
                rules={[
                  { required: true, message: "Please Select your city!" },
                ]}
              >
                <Input
                  type="password"
                  placeholder="enter your password.."
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </Form.Item>
              <SubmitButton type="submit">Login</SubmitButton>
            </Form>
            <AuthFooter>
              <AuthPrivacy>
                By creating your Journal Bit account, you agree to our{" "}
                <a href="#">Terms, Data Policy</a> and Cookie Policy.
              </AuthPrivacy>
              <span>
                Already have an account? Go to{" "}
                <Link to="/login">Login</Link>
              </span>
            </AuthFooter>
          </CardWrapper>
        </FormWrapper>
        <BannerWrapper className="col-sm-6"></BannerWrapper>
      </div>
    </Wrapper>
  );
}
