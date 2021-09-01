import React,{ useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getBooking } from "../../redux/actions/actions";

const { TabPane } = Tabs;

export default function Profiles() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.Auth.user)
  const bookings = useSelector(state => state.Hotels.bookings)

  console.log(bookings)

  useEffect(() => {
    dispatch(getBooking())
  }, [])


  return (
    <SectionWrapper>
      <div className="container">
        <Heading content="My Bookings" />
        <HeadWrapper>
          <Avatar shape="square" size={70} icon={<FcBusinessman />} />
          <UserDetails>
            <UserName>{`${user.fname} ${user.lname}`}</UserName>
            <UserEmail>{user.email}</UserEmail>
            <UserEmail>{user.mobile}</UserEmail>
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
