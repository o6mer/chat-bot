import React, { createContext, ReactNode, useEffect, useState } from "react";
import { useSocket } from "../Hooks/useSocket";
import { TChat, TUser } from "../Types/Types";

export type TDashbaordContext = {
  token: string;
  setToken: (token: string) => void;
  user?: TUser;
  setUser: (user: TUser) => void;
  darkMode?: boolean;
  setDarkMode?: (mode: boolean) => void;
  currentChatId?: string;
  setCurrentChatId: (chatId?: string) => void;
  screen?: number;
  setScreen: (screen: number) => void;
  chatList?: Array<TChat>;
  userStatus?: string;
  setUserStatus: (userStatus: string) => void;
};

export const DashboardContext = createContext<TDashbaordContext | null>(null);

const DashboardContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<TUser>();
  const [token, setToken] = useState<string>("");
  const [darkMode, setDarkMode] = useState(false);
  const [currentChatId, setCurrentChatId] = useState<string>();
  const [screen, setScreen] = useState(1);
  const [userStatus, setUserStatus] = useState<string>("active");

  return (
    <DashboardContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        darkMode,
        currentChatId,
        setCurrentChatId,
        screen,
        setScreen,
        userStatus,
        setUserStatus,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContextProvider;
