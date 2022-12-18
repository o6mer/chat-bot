import React, { useContext, useEffect, useState } from "react";
import MainFrame from "./Conversations/MainFrame/MainFrame";
import SideBar from "./Conversations/Sidebar/Sidebar";
import { useSocket } from "../../Hooks/useSocket";
import Conversations from "./Conversations/Conversations";
import NavigationBar from "./General/NavigationBar";

const Dashboard = () => {
  return (
    <main className="w-full h-full flex">
      <NavigationBar />
      <Conversations />
    </main>
  );
};

export default Dashboard;
