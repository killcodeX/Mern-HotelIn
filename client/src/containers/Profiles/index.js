import React from "react";
import { Heading } from "../../components/UI/Heading";
import { Avatar } from "antd";
import { FcBusinessman } from "react-icons/fc";
import { Tabs, Divider } from "antd";
import Upcoming from "./upcoming";
import Cancelled from "./cancelled";
import Completed from "./completed";
import {
  SectionWrapper,
  HeadWrapper,
  UserDetails,
  UserName,
  UserEmail,
} from "./style";

const { TabPane } = Tabs;

export default function Profiles() {
  return (
    <SectionWrapper>
      <div className="container">
        <Heading content="My Bookings" />
        <HeadWrapper>
          <Avatar shape="square" size={64} icon={<FcBusinessman />} />
          <UserDetails>
            <UserName>Aaquib Ahmed</UserName>
            <UserEmail>aaquib@gmail.com</UserEmail>
          </UserDetails>
        </HeadWrapper>
        <Divider/>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Upcoming Bookings" key="1">
            <Upcoming />
          </TabPane>
          <TabPane tab="Cancelled Bookings" key="2">
            <Cancelled />
          </TabPane>
          <TabPane tab="Completed Bookings" key="3">
            <Completed />
          </TabPane>
        </Tabs>
      </div>
    </SectionWrapper>
  );
}
