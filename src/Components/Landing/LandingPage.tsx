import React from "react";
import ChatButton from "./Home/ChatButton";
import Features from "./Home/Features";
import Hero from "./Home/Hero";
import NavigationBar from "./Home/NavigationBar";
const LandingPage = () => {
  return (
    <main className="h-full relative">
      <ChatButton />
      <div className="h-screen flex flex-col">
        <NavigationBar />
        <Hero />
      </div>
      <Features />
    </main>
  );
};

export default LandingPage;
