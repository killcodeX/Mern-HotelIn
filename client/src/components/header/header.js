import React, { useState } from "react";
import { NavbarWrapper, LogoWrapper, ImageAvatar, DropdownMenu  } from "./navbarStyle";

export default function Header() {
  return (
    <div className="container">
      <NavbarWrapper>
          <LogoWrapper
            src={process.env.PUBLIC_URL + "/assets/logo.png"}
            alt="hotel.in"
          />
        <ImageAvatar>
            <img src={process.env.PUBLIC_URL + "/assets/profileImage.jpg"} alt='profile' />
        </ImageAvatar>
        <DropdownMenu >
            Log Out
        </DropdownMenu >
      </NavbarWrapper>
    </div>
  );
}
