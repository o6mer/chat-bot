import React from "react";
import LoginPage from "./Login/LoginPage";
import { useLocation } from "react-router-dom";
import SignupPage from "./Signup/SignupPage";

const LandingPage = () => {
  const location = useLocation();

  return (
    <main className="h-screen -screen flex justify-center items-center">
      <div className="bg-gray-400 p-4">
        {location.pathname === "/" && <LoginPage />}
        {location.pathname === "/login" && <LoginPage />}
        {location.pathname === "/signup" && <SignupPage />}
      </div>
    </main>
  );
};

export default LandingPage;
