import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons/";
import { faUser } from "@fortawesome/free-solid-svg-icons"
import ButtonUI from "../Button/Button";
import Logo from "../../assets/images/LogoBaru.png"

const CircleBg = ({ children }) => {
  return <div className="circle-bg">{children}</div>;
};

class Navbar extends React.Component {
  state = {
    dropdownOpen: false,
  };

  render() {
    return (
      <div className="d-flex flex-row justify-content-between align-items-center py-4 navbar-container">
        <div className="logo-text">
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
            LOGO
          </Link>
        </div>
        <div className="d-flex flex-row align-items-center">
          <Link
            to="/about"
            className="nav-link"
            style={{ color: "white", textDecoration: "none" }}
          >
            <span>Crews</span>
          </Link>
          <Link
            to="/portfolio"
            className="nav-link"
            style={{ color: "white", textDecoration: "none" }}
          >
            <span>Portfolio</span>
          </Link>
          <Link
            to="/package"
            className="nav-link"
            style={{ color: "white", textDecoration: "none" }}
          >
            <span>Our Package</span>
          </Link>
          <Link
            to="/contact"
            className="nav-link"
            style={{ color: "white", textDecoration: "none" }}
          >
            <span>Contact Us</span>
          </Link>
          <div className="d-flex flex-row align-items-center">
            {this.props.user.id ? (
              <>
                <Dropdown
                  toggle={this.toggleDropdown}
                  isOpen={this.state.dropdownOpen}
                >
                  <DropdownToggle tag="div" className="d-flex">
                    <FontAwesomeIcon icon={faUser} style={{ fontSize: 24 }} />
                    <p className="small ml-3 mr-4">
                      {this.props.user.username}
                    </p>
                  </DropdownToggle>
                  <DropdownMenu className="mt-2">
                    {this.props.user.role == "admin" ? (
                      <>
                        <DropdownItem>
                          <Link
                            style={{ color: "inherit", textDecoration: "none" }}
                            to="/admin/dashboard"
                          >
                            Dashboard
                          </Link>
                        </DropdownItem>
                        <DropdownItem>Members</DropdownItem>
                        <DropdownItem>
                          <Link
                            style={{ color: "inherit", textDecoration: "none" }}
                            to="/admin/payments"
                          >
                            Payments
                          </Link>
                        </DropdownItem>
                        <DropdownItem>
                          <Link
                            style={{ color: "inherit", textDecoration: "none" }}
                            to="/admin/report"
                          >
                            Report
                          </Link>
                        </DropdownItem>
                      </>
                    ) : (
                      <>
                        <DropdownItem>
                          <Link
                            style={{ color: "inherit", textDecoration: "none" }}
                            to="/wishlist"
                          >
                            Wishlist
                          </Link>
                        </DropdownItem>
                        <DropdownItem>
                          <Link to="/history">History</Link>
                        </DropdownItem>
                      </>
                    )}
                  </DropdownMenu>
                </Dropdown>
                <Link
                  className="d-flex flex-row"
                  to="/cart"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <FontAwesomeIcon
                    className="mr-2"
                    icon={faShoppingCart}
                    style={{ fontSize: 24 }}
                  />
                  <CircleBg>
                    <small style={{ color: "#3C64B1", fontWeight: "bold" }}>
                      {this.props.user.cartItems}
                    </small>
                  </CircleBg>
                </Link>
                <ButtonUI
                  onClick={this.logoutBtnHandler}
                  className="ml-3"
                  type="textual"
                >
                  Logout
                </ButtonUI>
              </>
            ) : (
              <>
                <ButtonUI className="mr-3" type="textual">
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to="/auth"
                  >
                    Sign in
                  </Link>
                </ButtonUI>
                <ButtonUI type="contained">
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to="/auth"
                  >
                    Sign up
                  </Link>
                </ButtonUI>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Navbar);
