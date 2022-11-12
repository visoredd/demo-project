import React from "react";
import Navbar from "./Navbar";
import logo from "../../assests/logo.svg";
import "./index.css";
function Header() {
  return (
    <div className="header">
      <div>
        <img src={logo} alt="React logo" />
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
}

export default Header;