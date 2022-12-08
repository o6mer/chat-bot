import React from "react";
import Chat from "./Chat/Chat";
import InfoSidebar from "./InfoSidebar/InfoSidebar";

const MainFrame = () => {
  return (
    <section className=" h-full flex grow">
      <Chat />
      <InfoSidebar />
    </section>
  );
};

export default MainFrame;
