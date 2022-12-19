import React, { useContext, useEffect, useState } from "react";
import { DashboardContext } from "../../../../Contexts/DashbaordContext";
import {
  SocketContext,
  TSocketContext,
} from "../../../../Contexts/SocketContext";
import { TChat, TMessage } from "../../../../Types/Types";
import Chat from "./Chat/Chat";
import InfoSidebar from "./InfoSidebar/InfoSidebar";

const MainFrame = () => {
  const { currentChatId }: any = useContext(DashboardContext);
  const { currentChatData } = useContext(SocketContext) as TSocketContext;

  return (
    <section className=" h-full flex grow">
      {currentChatId ? (
        <>
          <Chat currentChatData={currentChatData} />
          <InfoSidebar currentChatData={currentChatData} />
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
