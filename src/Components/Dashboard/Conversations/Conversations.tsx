import React from "react";
import { useSocket } from "../../../Hooks/useSocket";
import { TChat } from "../../../Types/Types";
import MainFrame from "./MainFrame/MainFrame";
import SideBar from "./Sidebar/Sidebar";

const Conversations = ({
  chatList,
  deleteAllChats,
  sendMessage,
  currentChatData,
  setChatStatus,
  setFilteredChatList,
}: {
  chatList: TChat[] | undefined;
  deleteAllChats: () => void;
  sendMessage: (messageContent: string) => void;
  currentChatData: TChat | undefined;
  setChatStatus: (status: string, chatId: string) => void;
  setFilteredChatList: (filter: string) => void;
}) => {
  return (
    <>
      <SideBar
        chatList={chatList}
        deleteAllChats={deleteAllChats}
        setFilteredChatList={setFilteredChatList}
      />
      <MainFrame
        sendMessage={sendMessage}
        currentChatData={currentChatData}
        setChatStatus={setChatStatus}
      />
    </>
  );
};

export default Conversations;
