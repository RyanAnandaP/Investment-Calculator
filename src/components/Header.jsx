import React from "react";
import logo from "/bag_of_money.png";

const Header = () => {
  return (
    <header id="header">
      <img src={logo} alt="Investment Logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;
