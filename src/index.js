import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { NavBar } from "./components/landingPage/NavBar";
import Signup from "./components/landingPage/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home} from "./components/landingPage/Home";
import Contact from "./components/landingPage/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <NavBar /> */}
    {/* <Signup /> */}
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          
        </Routes>
      </Router>
      {/* <Contact /> */}
    </>
    {/* <Contact /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
