import React from "react";
import "../styles/NavBar.css";
import site_logo from "../site_logo.svg";

export default function NavBar() {
  return (
    <>
      <header>
        <div className="navBar">
          <div className="site-logo">
            <a href="#">
              <img src={site_logo} className="slogo" />
            </a>
          </div>
          <ul className="links">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/courses">Courses</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Training</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>

          <a href="#" className="signup-btn">
            SignUp / LogIn
          </a>
          <div className="toggle_btn">
            <i className="fa-regular fa-bars"></i>
          </div>
        </div>
        <div className="dropdown_menu open">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/courses">Courses</a>
          </li>
          <li>
            <a href="/pricing">Pricing</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Training</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
          <li>
            <a href="#" className="signup-btn">
              SignUp / LogIn
            </a>
          </li>
        </div>
      </header>
    </>
  );
}
