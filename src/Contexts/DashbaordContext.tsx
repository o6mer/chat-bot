import React, { createContext, useEffect, useState } from "react";
import { TChat, TUser } from "../Types/Types";

export const DashboardContext = createContext({});

const DashboardContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<TUser>();
  const [darkMode, setDarkMode] = useState(false);
  const [socket, setSocket]: any = useState();
  const [currentChatId, setCurrentChatId] = useState<string>();
  const [screen, setScreen] = useState(1);

  return (
    <DashboardContext.Provider
      value={{
        user,
        setUser,
        darkMode,
        socket,
        setSocket,
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
