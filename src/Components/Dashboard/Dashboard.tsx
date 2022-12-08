import React, { useContext, useEffect } from "react";
import { GeneralContext } from "../../Contexts/GeneralContext";
import MainFrame from "./MainFrame/MainFrame";
import SideBar from "./Sidebar/Sidebar";
import { io } from "socket.io-client";

const Dashboard = () => {
  const { socket, setSocket }: any = useContext(GeneralContext);

  useEffect(() => {
    setSocket(
      io("http://localhost:3001/", {
        closeOnBeforeunload: false,
      })
    );
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on("connect", () => {
      console.log("connected");

      socket.emit("newAdminConnection");
    });
  }, [socket]);

  return (
    <main className="w-full h-full flex">
      <SideBar />
      <MainFrame />
    </main>
  );
};

export default Dashboard;
