import React from "react";
import logo from "../../../assets/logo.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
const Footer = () => {
  return (
    <footer className="w-full py-8 bg-darkPrimary flex justify-center">
      <div className="w-fit flex flex-col lg:flex-row justify-between items- gap-4 center text-white">
        <div className="flex  justify-center items-center gap-2">
          <img src={logo} alt="" className="w-min" />
          <p className=" font-bold text-3xl">Helpster</p>
        </div>

        <div className="flex items-center">
          <p className="text-2xl text-center">
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
