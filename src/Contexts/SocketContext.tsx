import React, { createContext, useEffect, useState, ReactNode } from "react";
import { useSocket } from "../Hooks/useSocket";
import { TChat, TConversation, TTemplate, TUser } from "../Types/Types";
import io, { Socket } from "socket.io-client";

export type TSocketContext = {
  isConnected: boolean;
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
  conversations: Array<TConversation>;
  createConversation: (coversation: TConversation) => void;
  deleteConversation: (conversationId?: string) => void;
  updateConversation: (conversation: TConversation) => void;
  saveAllConversations: () => void;
};

const socket = io("http://localhost:3002/", {
  closeOnBeforeunload: false,
});

export const SocketContext = createContext<TSocketContext | null>(null);

const SocketContextProvider = ({ children }: { children: ReactNode }) => {
  const {
    isConnected,
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
    conversations,
    createConversation,
    deleteConversation,
    updateConversation,
    saveAllConversations,
  } = useSocket(socket);
  return (
    <SocketContext.Provider
      value={{
        isConnected,
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
        conversations,
        createConversation,
        deleteConversation,
        updateConversation,
        saveAllConversations,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
