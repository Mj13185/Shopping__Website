import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import DropdownCustom from "./DropdownCustom";

function Header() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img className="nav__logo" src={logo} alt="" />
      </Link>

      <div className="navbar__right">
        <DropdownCustom />
        <DropdownCustom />
      </div>
    </nav>
  );
}

export default Header;
