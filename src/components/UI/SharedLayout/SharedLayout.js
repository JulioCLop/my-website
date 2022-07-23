import React from "react";
import { Outlet } from "react-router-dom";
import FooterComponent from "../../Footer/FooterComponent";
import NavbarComponent from "../../Navigation/NavbarComponent";

const SharedLayout = () => {
  return (
    <React.Fragment>
      <NavbarComponent />
      <Outlet />
      <FooterComponent />
    </React.Fragment>
  );
};

export default SharedLayout;
