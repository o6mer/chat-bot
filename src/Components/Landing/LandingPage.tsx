import React from "react";
import ChatButton from "./Home/ChatButton";
import Features from "./Home/Features";
import Footer from "./Home/Footer";
import Hero from "./Home/Hero";
import NavigationBar from "./Home/NavigationBar";
import { Fade } from "react-awesome-reveal";

const LandingPage = () => {
  return (
    <main className="relative z-0 flex h-max flex-col">
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
