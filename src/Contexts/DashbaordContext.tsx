import React, { createContext, useEffect, useState } from "react";
import { useSocket } from "../Hooks/useSocket";
import { TChat, TUser } from "../Types/Types";

export type TDashbaordContext = {
  user?: TUser;
  setUser?: (user: TUser) => void;
  darkMode?: boolean;
  setDarkMode?: (mode: boolean) => void;
  currentChatId?: string;
  setCurrentChatId?: (chatId: string) => void;
  screen?: number;
  setScreen?: (screen: number) => void;
  chatList?: Array<TChat>;
};

export const DashboardContext = createContext<TDashbaordContext | null>(null);

const DashboardContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<TUser>();
  const [darkMode, setDarkMode] = useState(false);
  const [currentChatId, setCurrentChatId] = useState<string>();
  const [screen, setScreen] = useState(1);

  return (
    <DashboardContext.Provider
      value={{
        user,
        setUser,
        darkMode,
        currentChatId,
        setCurrentChatId,
        screen,
        setScreen,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContextProvider;
