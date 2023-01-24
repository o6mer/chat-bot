import React from "react";
import Hero from "./Home/Hero";
import NavigationBar from "./Home/NavigationBar";

const LandingPage = () => {
  return (
    <main className="h-full">
      <div className="h-screen flex flex-col">
        <NavigationBar />
        <Hero />
      </div>
      <div>sdas</div>
    </main>
  );
};

export default LandingPage;
