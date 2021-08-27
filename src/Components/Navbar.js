import React, { useState, useEffect } from "react";
import "./Navbar.css";
import NetflixLogo from "../Assets/NetflixLogo.png";
import NetflixAvatar from "../Assets/NetflixAvatar.png";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  console.log(`window`, window.scrollY);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`nav  ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src={NetflixLogo}
          alt="logo"
          onClick={() => history.push("/")}
        />
        <img
          className="nav__avatar"
          src={NetflixAvatar}
          alt="avatar"
          onClick={() => history.push("/profile")}
        />
      </div>
    </div>
  );
};

export default Navbar;
