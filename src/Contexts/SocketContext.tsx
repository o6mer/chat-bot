import React, { createContext, useEffect, useState, ReactNode } from "react";
import { useSocket } from "../Hooks/useSocket";
import { TChat, TTemplate, TUser } from "../Types/Types";

export type TSocketContext = {
  chatList?: Array<TChat>;
  deleteAllChats?: () => void;
  sendMessage: (message: string) => void;
  currentChatData?: TChat;
  setChatStatus: (status?: string, chatId?: string) => void;
  setFilteredChatList: (filter: string) => void;
  templateList?: Array<TTemplate>;
  updateTemplate: (template: TTemplate) => void;
  deleteTemplate: (templateId?: string) => void;
  createTemplate: (title: string, content: string) => void;
};

export const SocketContext = createContext<TSocketContext | null>(null);

const SocketContextProvider = ({ children }: { children: ReactNode }) => {
  const {
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
  } = useSocket();

  return (
    <SocketContext.Provider
      value={{
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
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
