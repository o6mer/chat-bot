import React, { useContext, useEffect, useState } from "react";
import { GeneralContext } from "../../Contexts/GeneralContext";
import MainFrame from "./MainFrame/MainFrame";
import SideBar from "./Sidebar/Sidebar";
import { io } from "socket.io-client";
import { TChat, TMessage } from "../../Types/Types";

const Dashboard = () => {
  const { socket, setSocket }: any = useContext(GeneralContext);

  const [chatList, setChatList] = useState<Array<TChat>>();

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
      console.log("admin connected");

      socket.emit("newAdminConnection", onNewAdminConnection);
      socket.on("newChatStarted", onNewChat);
    });

    return () => {
      socket.removeAllListeners();
    };
  }, [socket]);

  const onNewAdminConnection = (prevChatList: Array<any>) => {
    setChatList(prevChatList);
  };

  const onNewChat = (newChat: TChat) => {
    setChatList((prev: any) => [...prev, newChat]);
  };

  return (
    <main className="w-full h-full flex">
      <SideBar chatList={chatList} />
      <MainFrame />
    </main>
  );
};

export default Dashboard;
