import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo.svg";
const NavigationBar = () => {
  return (
    <nav className="flex px-4 py-2 text-xl font-bold justify-center">
      <div className="w-full max-w-3xl flex justify-between items-center">
        <a href="/" className="flex items-center text-black">
          <img src={logo} className="w-12" />
          <p>Helpster</p>
        </a>
        <div className="flex gap-2 items-center">
          <Link
            to={"/login"}
            className="flex items-center bg-darkPrimary px-2 py-1 rounded-lg text-white hover:bg-darkSecondary  transition-all"
          >
            Login
          </Link>
          <Link
            to={"/signup"}
            className="border-2 hover:bg-secondary px-2 py-1 rounded-lg transition-all"
          >
            Signup{" "}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
