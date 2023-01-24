import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo.svg";

const Hero = () => {
  return (
    <section className="w-full bg-darkPrimary text-white flex flex-col flex-grow items-center py-12">
      <div className="flex flex-col h-full justify-center items-center max-w-3xl gap-8">
        <img src={logo} alt="" />
        <div className="flex flex-col justify-center text-center gap-4">
          <header className="font-bold text-5xl">
            Support customers at exactly the right moment
          </header>
          <p className="text-2xl">
            Faster resolutions. Happier customers. Intercom is the only platform
            that connects you with customers at the best possible time—when
            they’re already using your product, app, or website.
          </p>
        </div>
        <div className="flex text-2xl font-bold gap-2">
          <Link
            to={"/login"}
            className="border-2 hover:bg-darkSecondary px-2 py-1 rounded-lg transition-all"
          >
            Login{" "}
          </Link>
          <Link
            to={"/signup"}
            className="flex items-center bg-primary text-black px-2 py-1 rounded-lg hover:bg-third  transition-all"
          >
            Signup
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
