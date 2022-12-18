import React from "react";
import { useSocket } from "../../../Hooks/useSocket";
import MainFrame from "./MainFrame/MainFrame";
import SideBar from "./Sidebar/Sidebar";

const Conversations = () => {
  const {
    chatList,
    deleteAllChats,
    sendMessage,
    currentChatData,
    setChatStatus,
    setFilteredChatList,
  } = useSocket();
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
