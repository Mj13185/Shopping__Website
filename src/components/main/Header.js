import React from "react";
import { Link } from "react-router-dom";
import {
  SearchRounded,
  FavoriteBorder,
  PersonOutline,
  LocalMallOutlined,
} from "@material-ui/icons";

import SignInPage from "../signIn/SignInPage";

import "../../bootstrap.min.css";
import "./Header.css";

class Header extends React.Component {
  state = { modalShow: false };

  toggleDropdown = () => {
    this.setState({ modalShow: !this.state.modalShow }, function () {
      console.log(this.state.number);
    });
  };

  render() {
    const { modalShow } = this.state;
    return (
      <nav className="navbar sticky-top navbar-expand-md navbar-light bg-light">
        {/* Logo */}
        <Link to="/">
          <img
            className="logo"
            src={require("../../assets/logo.png")}
            alt="logo"
          />
        </Link>
        <div className="searchBar">
          <input
            className="form-control border-0"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <SearchRounded className="icon__search" />
        </div>
        {/* responsive menu toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/** Search Bar */}
          {/** Links */}
          <div className="headerRight">
            <Link to="/wishlist">
              <div className="icon__headerRight">
                <FavoriteBorder />
              </div>
            </Link>
            <Link
              onClick={this.toggleDropdown}
              isOpen={modalShow}
              data-toggle="modal"
            >
              <div className="icon__headerRight" data-toggle="modal">
                <PersonOutline />
                <div className="headerOption">
                  <span className="header__optionOne">Hello, sign in</span>
                  <span className="header__optionTwo">My Account</span>
                </div>
              </div>
            </Link>
            <SignInPage show={modalShow} onHide={this.toggleDropdown} />

            <Link to="/">
              <div className="icon__headerRight">
                <LocalMallOutlined />
                <div className="headerOption">
                  <span className="header__optionOne">Your Cart</span>
                  <span className="header__optionTwo">Checkout</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
