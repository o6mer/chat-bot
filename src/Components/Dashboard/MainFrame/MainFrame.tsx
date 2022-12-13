import React, { useContext, useEffect, useState } from "react";
import { DashboardContext } from "../../../Contexts/DashbaordContext";
import { TChat, TMessage } from "../../../Types/Types";
import Chat from "./Chat/Chat";
import InfoSidebar from "./InfoSidebar/InfoSidebar";

const MainFrame = ({
  sendMessage,
  currentChatData,
  setChatStatus,
}: {
  sendMessage: (msg: string) => void;
  currentChatData?: TChat;
  setChatStatus: (status: string, id: string) => void;
}) => {
  const { currentChatId }: any = useContext(DashboardContext);

  return (
    <section className=" h-full flex grow">
      {currentChatId ? (
        <>
          <Chat
            currentChatData={currentChatData}
            sendMessage={sendMessage}
            setChatStatus={setChatStatus}
          />
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
