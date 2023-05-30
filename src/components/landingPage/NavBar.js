import React, {useState} from "react";
import "E:/CodeProject/LearningMgmtSystem/LearningMS/src/styles/NavBar.css";
import site_logo from "E:/CodeProject/LearningMgmtSystem/LearningMS/src/site_logo.svg";
import { handleSignup } from "../LoginPage/SignUp.js";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
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
          <a href="#" className="signup-btn" onClick={handleSignup}>
            SignUp / LogIn
          </a>
          <div className="toggle_btn" onClick={handleMenuToggle}>
            <i className="fa-regular fa-bars"></i>
          </div>
        </div>
        <div className={`dropdown_menu ${isMenuOpen ? "active" : "inactive"}`}>
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
            <a href="#" className="signup-btn" onClick={handleSignup}>
              SignUp / LogIn
            </a>
          </li>
        </div>
      </header>
    </>
  );
}