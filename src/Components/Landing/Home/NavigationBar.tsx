import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
const NavigationBar = () => {
  return (
    <nav className="sticky top-0 z-10 flex justify-center bg-primary px-4 py-2 text-xl font-bold">
      <div className="flex w-full max-w-4xl items-center justify-between bg-primary">
        <a href="/" className="flex items-center text-black">
          <img src={logo} className="w-12" />
          <p>Helpster</p>
        </a>
        <div className="flex items-center gap-2">
          <Link
            to={"/login"}
            className="rounded-lg bg-darkPrimary px-2 py-1 text-xl text-white transition-all hover:bg-darkSecondary"
          >
            Get Started{" "}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
