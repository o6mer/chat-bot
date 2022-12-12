import React, { useContext, useEffect, useState } from "react";
import { DashboardContext } from "../../../Contexts/DashbaordContext";
import { TChat, TMessage } from "../../../Types/Types";
import Chat from "./Chat/Chat";
import InfoSidebar from "./InfoSidebar/InfoSidebar";

const MainFrame = ({
  sendMessage,
  currentChatData,
}: {
  sendMessage: (msg: string) => void;
  currentChatData?: TChat;
}) => {
  const { currentChatId }: any = useContext(DashboardContext);

  return (
    <section className=" h-full flex grow">
      {currentChatId ? (
        <>
          <Chat
            messages={currentChatData?.messages}
            sendMessage={sendMessage}
            costumerName={currentChatData?.costumerName}
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
