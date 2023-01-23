import React from "react";
import Hero from "./Home/Hero";
import NavigationBar from "./Home/NavigationBar";

const LandingPage = () => {
  return (
    <main className="w-full h-full flex flex-col overflow-y-scroll">
      <NavigationBar />
      <Hero />
      <div>sdasdsa</div>
    </main>
  );
};

export default LandingPage;
