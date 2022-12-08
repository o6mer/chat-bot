import React, { useContext } from "react";
import { GeneralContext } from "../../../Contexts/GeneralContext";
import Chat from "./Chat/Chat";
import InfoSidebar from "./InfoSidebar/InfoSidebar";

const MainFrame = () => {
  const { currentChatId }: any = useContext(GeneralContext);

  return (
    <section className=" h-full flex grow">
      {currentChatId ? (
        <>
          <Chat />
          <InfoSidebar />
        </>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          no chat selected
        </div>
      )}
    </section>
  );
};

export default MainFrame;
