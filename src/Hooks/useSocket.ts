import { useContext, useEffect, useState } from "react";
import {
  DashboardContext,
  TDashbaordContext,
} from "../Contexts/DashbaordContext";
import {
  TChat,
  TConversation,
  TMessage,
  TTemplate,
  TUser,
} from "../Types/Types";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "@socket.io/component-emitter";

export const useSocket = (
  socket: Socket<DefaultEventsMap, DefaultEventsMap>
) => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [chatList, setChatList] = useState<Array<TChat>>([]);
  const [chatFilter, setChatFilter] = useState<string>("open");
  const [currentChatData, setCurrentChatData] = useState<TChat>();
  const [templateList, setTemplateLst] = useState<Array<TTemplate>>([]);
  const [conversations, setConversations] = useState<Array<TConversation>>([]);
  const [onlineAdmins, setOnlineAdmins] = useState<Array<TUser>>();
  const { token, user, currentChatId, setCurrentChatId } = useContext(
    DashboardContext
  ) as TDashbaordContext;

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });

    if (!token) return;
    socket.emit("newAdminConnection", token, onNewAdminConnection);

    socket.on("receiveMessage", onReceiveMessage);
    socket.on("adminDisconnected", onAdminDisconnected);

    socket.on("disconnect", () => {
      setIsConnected(false);
    });
    return () => {
      socket.off("connect");
      socket.off("newAdminConnection");
      socket.off("receiveMessage");
      socket.off("disconnect");
    };
  }, [token]);

  useEffect(() => {
    socket?.on("newChatStarted", onNewChat);
    socket?.on("chatStatusChanged", onChatStatusChanged);
    return () => {
      socket?.off("newChatStarted");
      socket?.off("chatStatusChanged");
    };
  }, [chatFilter]);

  useEffect(() => {
    if (!isConnected) return;
    socket?.emit("getChatData", currentChatId, (chat: TChat) => {
      setCurrentChatData(chat);
    });
  }, [currentChatId]);

  const getUserById = (userId: string) => {
    let user;
    socket?.emit("getUserById", userId, (userData: TUser) => {
      user = userData;
    });
    return user;
  };

  const onNewAdminConnection = (adaminData: {
    isAuth: boolean;
    chatList: Array<TChat>;
    templateList: Array<TTemplate>;
    covnersationList: Array<TConversation>;
    onlineAdmins: Array<TUser>;
  }) => {
    console.log("admin connected", adaminData);
    setChatList(adaminData.chatList);
    setConversations(adaminData.covnersationList);
    setTemplateLst(adaminData.templateList);
    setOnlineAdmins(adaminData.onlineAdmins);
  };

  const onNewChat = (newChat: TChat) => {
    setChatList((prev: Array<TChat>): Array<TChat> => {
      if (newChat.status === chatFilter) return [...prev, newChat];

      return prev.filter((chat: TChat) => chat.id !== newChat.id);
    });
    socket?.emit("joinChat", newChat.id);
  };

  const onReceiveMessage = ({
    message,
    id,
  }: {
    message: TMessage;
    id: string;
  }) => {
    addMessage(message, id);
  };

  const addMessage = (message: TMessage, id: string) => {
    setChatList((prev: Array<TChat>): Array<TChat> => {
      const index = prev.findIndex((chat: TChat) => chat.id === id);
      prev[index]?.messages.push(message);
      return [...prev];
    });

    setCurrentChatData((prev: TChat | undefined) => {
      if (!prev) return;
      return { ...prev, messages: [...prev.messages, message] };
    });
  };

  const onChatStatusChanged = (newChat: TChat) => {
    setChatList((prev: Array<TChat>): Array<TChat> => {
      if (newChat.status === chatFilter) return [...prev, newChat];
      if (newChat.status !== chatFilter)
        return prev.filter((chat: TChat) => chat.id !== newChat.id);
      return prev;
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
    socket?.emit("setChatStatus", status, chatId);
    setCurrentChatId("");
    setChatList((prev: Array<TChat>) =>
      prev.filter((chat: TChat) => {
        // if (chat.status !== status) return;
        return chat.id !== chatId;
      })
    );
  };

  const deleteAllChats = () => {
    socket?.emit("deleteAllChats");
  };

  const setFilteredChatList = (filter: string) => {
    // if (filter === chatFilter) return;
    if (!isConnected) return;
    socket?.emit("getFilteredChatList", filter, (chatList: Array<TChat>) => {
      setChatFilter(filter);
      setChatList([...chatList]);
    });
  };

  const updateTemplate = (updatedTemplate: TTemplate) => {
    if (!updatedTemplate.id)
      return createTemplate(updatedTemplate.title, updatedTemplate.content);
    socket?.emit("updateTemplate", updatedTemplate);
    setTemplateLst((prev: Array<TTemplate>) => {
      const index = prev.findIndex(
        (template: TTemplate) => template.id === updatedTemplate.id
      );
      prev[index] = updatedTemplate;
      return [...prev];
    });
  };

  const deleteTemplate = (tempalteId?: string) => {
    socket?.emit("deleteTemplate", tempalteId);
    setTemplateLst((prev: Array<TTemplate>) =>
      prev.filter((template: TTemplate) => template.id !== tempalteId)
    );
  };

  const createTemplate = (title?: string, content?: string) => {
    socket?.emit("createTemplate", { title, content }, (template: TTemplate) =>
      setTemplateLst((prev: Array<TTemplate>) => [...prev, template])
    );
  };

  const createConversation = (conversation: TConversation) => {
    socket?.emit(
      "createConversation",
      conversation,
      (conversation: TConversation) => {
        console.log(conversation);
        setConversations((prev) => [...prev, conversation]);
      }
    );
  };

  const deleteConversation = (conversationId?: string) => {
    socket?.emit("deleteConversation", conversationId);
    setConversations((prev) => {
      prev = prev.filter((conversation) => conversation.id !== conversationId);
      return [...prev];
    });
  };

  const updateConversation = (updatedConversation: TConversation) => {
    socket?.emit("updateConversation", updatedConversation);
    setConversations((prev: Array<TConversation>) => {
      const index = prev.findIndex(
        (conversation: TConversation) =>
          conversation.id === updatedConversation.id
      );
      prev[index] = updatedConversation;
      return [...prev];
    });
  };

  const saveAllConversations = () => {
    socket?.emit("saveAllConversations", conversations);
  };

  const onAdminDisconnected = (onlineAdmins: Array<TUser>) => {
    setOnlineAdmins([...onlineAdmins]);
  };

  const disconnectAdmin = () => {
    socket?.emit("adminDisconnect", user?.id);
  };

  return {
    //socket
    isConnected,

    //chats
    chatList,
    deleteAllChats,
    sendMessage,
    currentChatData,
    setChatStatus,
    setFilteredChatList,

    //templates
    templateList,
    updateTemplate,
    deleteTemplate,
    createTemplate,

    //covnersations
    conversations,
    createConversation,
    deleteConversation,
    updateConversation,
    saveAllConversations,

    //admins
    onlineAdmins,
    disconnectAdmin,
  };
};
