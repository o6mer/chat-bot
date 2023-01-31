import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo.svg";

const Hero = () => {
  return (
    <section className="flex h-screen w-full flex-grow flex-col  items-center text-black">
      <div className="flex h-full max-w-3xl flex-col items-center justify-center gap-8">
        <div className="flex flex-col justify-center gap-4 text-center">
          <header className="text-7xl font-bold">
            Support customers at exactly the right moment
          </header>
          <p className="text-2xl">
            Faster resolutions. Happier customers. Helpster is the only platform
            that connects you with customers at the best possible time—when
            they’re already using your product, app, or website.
          </p>
        </div>
        <div className="flex gap-2 text-2xl font-bold">
          <Link
            to={"/login"}
            className="rounded-lg bg-darkPrimary px-4 py-2 text-3xl text-white transition-all hover:bg-darkSecondary"
          >
            Get Started{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
