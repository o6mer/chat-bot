import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
const NavigationBar = () => {
  return (
    <nav className="flex px-4 py-2 text-xl font-bold justify-center sticky top-0 bg-primary">
      <div className="w-full max-w-4xl flex justify-between items-center bg-primary">
        <a href="/" className="flex items-center text-black">
          <img src={logo} className="w-12" />
          <p>Helpster</p>
        </a>
        <div className="flex gap-2 items-center">
          <Link
            to={"/login"}
            className="bg-darkPrimary text-white hover:bg-darkSecondary text-xl px-2 py-1 rounded-lg transition-all"
          >
            Get Started{" "}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
