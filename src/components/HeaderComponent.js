import React from "react";
import "../App.css";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";

const HeaderComponent = (props) => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <img
            src="https://img.icons8.com/plasticine/2x/filled-circle.png"
            width="70px"
            height="70px"
          />
        </NavbarBrand>
        <NavbarText className="display-4">Balloon Game</NavbarText>
      </Navbar>
    </div>
  );
};

export default HeaderComponent;
