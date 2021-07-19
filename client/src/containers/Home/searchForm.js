import React from "react";
import { FormWrapper, ComponentWrapper, FormInput } from "./homestyle";
import { FaMapMarkerAlt, FaRegCalendar, FaUserFriends } from 'react-icons/fa';
import { Button } from 'antd';

export default function searchForm() {

  return (
    <FormWrapper>
      <ComponentWrapper>
        <FaMapMarkerAlt/>
        <FormInput placeholder='Search cities..'/>
      </ComponentWrapper>
      <ComponentWrapper>
        <FormInput placeholder='Search cities..'/>
      </ComponentWrapper>
      <ComponentWrapper>
        <FormInput placeholder='Search cities..'/>
      </ComponentWrapper>
      <Button
        type="primary"
        htmlType="submit"
        size="large"
      >
        Find Hotels
      </Button>
    </FormWrapper>
  );
}
