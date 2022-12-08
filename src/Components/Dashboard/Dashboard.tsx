import React from "react";
import MainFrame from "./MainFrame/MainFrame";
import SideBar from "./Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <main className="w-full h-full flex">
      <SideBar />
      <MainFrame />
    </main>
  );
};

export default Dashboard;
