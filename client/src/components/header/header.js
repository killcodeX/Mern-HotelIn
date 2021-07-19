import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, Dropdown } from "antd";
import {
  NavbarWrapper,
  NavItems,
  LogoWrapper,
  ImageAvatar,
  DropdownMenu,
} from "./navbarStyle";

export default function Header() {
  const location = useLocation();
  return (
    <NavbarWrapper back={location.pathname != "/" ? "white" : "Transparent"}
    shadow={location.pathname != "/" ? "0 0.125rem 0.25rem rgb(0 0 0 / 8%)" : "none"}>
      <div className="container">
        <NavItems>
          <Link to="/">
            {location.pathname == "/" ? (
              <LogoWrapper
                src={process.env.PUBLIC_URL + "/assets/logo-white.png"}
                alt="hotel.in"
              />
            ) : (
              <LogoWrapper
                src={process.env.PUBLIC_URL + "/assets/logo-black.png"}
                alt="hotel.in"
              />
            )}
          </Link>
          <Dropdown overlay={menu}>
            <ImageAvatar>
              <img
                src={process.env.PUBLIC_URL + "/assets/profileImage.jpg"}
                alt="profile"
              />
            </ImageAvatar>
          </Dropdown>
          {/* <DropdownMenu>Log Out</DropdownMenu> */}
        </NavItems>
      </div>
    </NavbarWrapper>
  );
}


const menu = (
  <Menu>
    <Menu.Item key={1}>
      Log Out
    </Menu.Item>
  </Menu>
)