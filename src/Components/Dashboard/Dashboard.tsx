import React, { useContext, useEffect, useState } from "react";
import MainFrame from "./MainFrame/MainFrame";
import SideBar from "./Sidebar/Sidebar";
import { useSocket } from "../../Hooks/useSocket";

const Dashboard = () => {
  const {
    chatList,
    deleteAllChats,
    sendMessage,
    currentChatData,
    setChatStatus,
    setFilteredChatList,
  } = useSocket();

  return (
    <main className="w-full h-full flex">
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
    </main>
  );
};

export default Dashboard;
