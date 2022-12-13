import React, { useContext, useEffect, useState } from "react";
import MainFrame from "./MainFrame/MainFrame";
import SideBar from "./Sidebar/Sidebar";
import { useSocket } from "../../Hooks/useSocket";

const Dashboard = () => {
  const { chatList, deleteAllChats, sendMessage, currentChatData } =
    useSocket();

  return (
    <main className="w-full h-full flex">
      <SideBar chatList={chatList} deleteAllChats={deleteAllChats} />
      <MainFrame sendMessage={sendMessage} currentChatData={currentChatData} />
    </main>
  );
};

export default Dashboard;
