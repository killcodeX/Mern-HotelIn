import React from "react";
import { useLocation, Link } from "react-router-dom";
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
    <NavbarWrapper back={location.pathname != "/" ? "white" : "Transparent"}>
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
          <ImageAvatar>
            <img
              src={process.env.PUBLIC_URL + "/assets/profileImage.jpg"}
              alt="profile"
            />
          </ImageAvatar>
          <DropdownMenu>Log Out</DropdownMenu>
        </NavItems>
      </div>
    </NavbarWrapper>
  );
}
