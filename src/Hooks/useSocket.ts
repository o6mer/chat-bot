import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "../Contexts/DashbaordContext";
import { TChat, TMessage } from "../Types/Types";
import { io } from "socket.io-client";

export const useSocket = () => {
  const [chatList, setChatList] = useState<Array<TChat>>();
  const [chatFitler, setChatFilter] = useState("open");
  const [currentChatData, setCurrentChatData] = useState<TChat>();
  const { user, socket, setSocket, currentChatId, setCurrentChatId }: any =
    useContext(DashboardContext);

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
      socket.emit("newAdminConnection", onNewAdminConnection);
      console.log("admin connected");

      socket.on("newChatStarted", onNewChat);
      socket.on("receiveMessage", onReceiveMessage);
    });

    return () => {
      socket?.removeAllListeners();
    };
  }, [socket, chatFitler]);

  useEffect(() => {
    socket?.emit("getChatData", currentChatId, (chat: TChat) => {
      setCurrentChatData(chat);
    });
  }, [currentChatId]);

  const onNewAdminConnection = (prevChatList: Array<any>) => {
    setChatList(prevChatList);
  };

  const onNewChat = (newChat: TChat) => {
    setChatList((prev: any) => {
      if (newChat.status !== chatFitler) return [...prev];
      return [...prev, newChat];
    });
    socket.emit("joinChat", newChat.id);
  };

  const onReceiveMessage = ({
    message,
    id,
  }: {
    message: TMessage;
    id: string;
  }) => {
    addMessage(message);
  };

  const addMessage = (message: TMessage) => {
    setCurrentChatData((prev: any) => {
      return { ...prev, messages: [...prev.messages, message] };
    });
  };

  const sendMessage = (messageContent: string) => {
    socket?.emit(
      "sendMessage",
      {
        id: currentChatId,
        messageContent,
        user: user?.username || "admin",
      },
      addMessage
    );
  };

  const setChatStatus = (status: string, chatId: string) => {
    socket.emit("setChatStatus", status, chatId);
    setCurrentChatId("");
    setChatList((prev: any) =>
      prev.filter((chat: TChat) => {
        // if (chat.status !== status) return;
        return chat.id !== chatId;
      })
    );
  };

  const deleteAllChats = () => {
    socket.emit("deleteAllChats");
  };

  const setFilteredChatList = (filter: string) => {
    if (filter === chatFitler) return;

    setChatFilter(filter);

    socket?.emit("getFilteredChatList", filter, (chatList: Array<TChat>) => {
      setChatList([...chatList]);
    });
  };

  return {
    chatList,
    deleteAllChats,
    sendMessage,
    currentChatData,
    setChatStatus,
    setFilteredChatList,
  };
};
