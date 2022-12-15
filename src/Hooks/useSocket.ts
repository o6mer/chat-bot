import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "../Contexts/DashbaordContext";
import { TChat, TMessage } from "../Types/Types";
import io from "socket.io-client";

const socket = io("http://localhost:3001/", {
  closeOnBeforeunload: false,
});

export const useSocket = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);

  const [chatList, setChatList] = useState<Array<TChat>>();
  const [chatFilter, setChatFilter] = useState<string>("open");
  const [currentChatData, setCurrentChatData] = useState<TChat>();
  const { user, currentChatId, setCurrentChatId }: any =
    useContext(DashboardContext);

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
      socket.emit("newAdminConnection", onNewAdminConnection);
    });
    socket.on("newChatStarted", onNewChat);
    socket.on("receiveMessage", onReceiveMessage);
    socket.on("chatStatusChanged", onChatStatusChanged);
    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    return () => {
      socket.off("connect");
      socket.off("newAdminConnection");
      socket.off("newChatStarted");
      socket.off("receiveMessage");
      socket.off("chatStatusChanged");
      socket.off("disconnect");
    };
  }, [chatFilter]);

  useEffect(() => {
    if (!isConnected) return;
    socket?.emit("getChatData", currentChatId, (chat: TChat) => {
      setCurrentChatData(chat);
    });
  }, [currentChatId]);

  const onNewAdminConnection = (prevChatList: Array<any>) => {
    console.log("admin connected");
    setChatList(prevChatList);
  };

  const onNewChat = (newChat: TChat) => {
    setChatList((prev: any) => {
      if (newChat.status === chatFilter) return [...prev, newChat];
      if (newChat.status !== chatFilter)
        return prev.filter((chat: TChat) => chat.id === newChat.id);
    });
    if (!isConnected) return;
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

  const onChatStatusChanged = (newChat: TChat) => {
    setChatList((prev: any) => {
      if (newChat.status === chatFilter) return [...prev, newChat];
      if (newChat.status !== chatFilter)
        return prev.filter((chat: TChat) => chat.id !== newChat.id);
    });
  };

  const addMessage = (message: TMessage) => {
    setCurrentChatData((prev: any) => {
      return { ...prev, messages: [...prev.messages, message] };
    });
  };

  const sendMessage = (messageContent: string) => {
    if (!isConnected) return;
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
    if (!isConnected) return;
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
    // if (filter === chatFilter) return;
    if (!isConnected) return;
    socket?.emit("getFilteredChatList", filter, (chatList: Array<TChat>) => {
      setChatFilter(filter);
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
