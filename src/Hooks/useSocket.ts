import { useContext, useEffect, useState } from "react";
import {
  DashboardContext,
  TDashbaordContext,
} from "../Contexts/DashbaordContext";
import { TChat, TMessage, TTemplate } from "../Types/Types";
import io from "socket.io-client";

const socket = io("http://localhost:3001/", {
  closeOnBeforeunload: false,
});

export const useSocket = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [chatList, setChatList] = useState<Array<TChat>>([]);
  const [chatFilter, setChatFilter] = useState<string>("open");
  const [currentChatData, setCurrentChatData] = useState<TChat>();
  const [templateList, setTemplateLst] = useState<Array<TTemplate>>([]);
  const { user, currentChatId, setCurrentChatId } = useContext(
    DashboardContext
  ) as TDashbaordContext;

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

  const onNewAdminConnection = (prevChatList: Array<TChat>) => {
    console.log("admin connected", prevChatList);
    setChatList(prevChatList);
    getAllTemplates();
  };

  const onNewChat = (newChat: TChat) => {
    setChatList((prev: Array<TChat>): Array<TChat> => {
      if (newChat.status === chatFilter) return [...prev, newChat];
      if (newChat.status !== chatFilter)
        return prev.filter((chat: TChat) => chat.id === newChat.id);
      return prev;
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
    setChatList((prev: Array<TChat>): Array<TChat> => {
      if (newChat.status === chatFilter) return [...prev, newChat];
      if (newChat.status !== chatFilter)
        return prev.filter((chat: TChat) => chat.id !== newChat.id);
      return prev;
    });
  };

  const addMessage = (message: TMessage) => {
    setCurrentChatData((prev: TChat | undefined) => {
      if (!prev) return;
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

  const setChatStatus = (status?: string, chatId?: string) => {
    if (!isConnected) return;
    socket.emit("setChatStatus", status, chatId);
    setCurrentChatId("");
    setChatList((prev: Array<TChat>) =>
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

  const getAllTemplates = () => {
    socket.emit("getAllTemplates", (list: Array<TTemplate>) => {
      setTemplateLst(list);
    });
  };

  const updateTemplate = (updatedTemplate: TTemplate) => {
    if (!updatedTemplate.id)
      return createTemplate(updatedTemplate.title, updatedTemplate.content);
    socket.emit("updateTemplate", updatedTemplate);
  };

  const deleteTemplate = (tempalteId?: string) => {
    socket.emit("deleteTemplate", tempalteId);
    setTemplateLst((prev: Array<TTemplate>) =>
      prev.filter((template: TTemplate) => template.id !== tempalteId)
    );
  };

  const createTemplate = (title?: string, content?: string) => {
    socket.emit("createTemplate", { title, content }, (template: TTemplate) =>
      setTemplateLst((prev: Array<TTemplate>) => [...prev, template])
    );
  };

  return {
    chatList,
    deleteAllChats,
    sendMessage,
    currentChatData,
    setChatStatus,
    setFilteredChatList,
    templateList,
    updateTemplate,
    deleteTemplate,
    createTemplate,
  };
};
