import React from "react";
import ChatButton from "./Home/ChatButton";
import Features from "./Home/Features";
import Footer from "./Home/Footer";
import Hero from "./Home/Hero";
import NavigationBar from "./Home/NavigationBar";
import Fade from "react-reveal/Fade";

const LandingPage = () => {
  return (
    <main className="flex flex-col h-max relative">
      <NavigationBar />
      <Fade>
        <Hero />
      </Fade>
      <Fade>
        <Features />
      </Fade>
      <Footer />
      <ChatButton />
    </main>
  );
};

export default LandingPage;
