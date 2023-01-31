import React from "react";
import logo from "../../../assets/logo.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
const Footer = () => {
  return (
    <footer className="flex w-full justify-center bg-darkPrimary py-8">
      <div className="items- center flex w-fit flex-col justify-between gap-4 text-white lg:flex-row">
        <div className="flex  items-center justify-center gap-2">
          <img src={logo} alt="" className="w-min" />
          <p className=" text-3xl font-bold">Helpster</p>
        </div>

        <div className="flex items-center">
          <p className="text-center text-2xl">
            This project was developed, designed and deployed by Omer Liraz.
          </p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <a
            href="https://github.com/o6mer"
            target="_blank"
            className="hover:text-secondary"
          >
            <GitHubIcon fontSize="large" />
          </a>
          <a
            href="https://www.linkedin.com/in/omer-liraz-12a337230/"
            target="_blank"
            className="hover:text-secondary"
          >
            <LinkedInIcon fontSize="large" />
          </a>
          <a
            href="mailto: o6merliraz@gmail.com"
            className="hover:text-secondary"
          >
            <EmailIcon fontSize="large" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
