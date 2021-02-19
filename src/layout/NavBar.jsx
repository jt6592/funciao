import React from "react";
import { Link } from "react-router-dom";
import Icon from "../img/icon.png";

const NavBar = () => {
  return (
    <div className="navBar-pin fixed w-full left-0 z-10 top-0">
      <div className="navBar max-w-xl mx-auto text-white shadow-md">
        <div className="flex justify-center">
          <Link to="/">
            <img src={Icon} className="icon" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
