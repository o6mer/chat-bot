import React, { createContext, useEffect, useState } from "react";
import { useSocket } from "../Hooks/useSocket";
import { TChat, TUser } from "../Types/Types";

export type TSocketContext = {
  chatList?: Array<TChat>;
  deleteAllChats?: () => void;
  sendMessage: (message: string) => void;
  currentChatData?: TChat;
  setChatStatus: (status: string, chatId: string) => void;
  setFilteredChatList: (filter: string) => void;
};

export const SocketContext = createContext<TSocketContext | null>(null);

const SocketContextProvider = ({ children }: any) => {
  const {
    chatList,
    deleteAllChats,
    sendMessage,
    currentChatData,
    setChatStatus,
    setFilteredChatList,
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
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
