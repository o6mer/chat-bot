import React, { createContext, useEffect, useState } from "react";
import { TChat, TUser } from "../Types/Types";

export const GeneralContext = createContext({});

const GeneralProvider = ({ children }: any) => {
  const [user, setUser] = useState<TUser>();
  const [darkMode, setDarkMode] = useState(false);
  const [socket, setSocket]: any = useState();
  const [currentChatId, setCurrentChatId] = useState<TChat>();

  return (
    <GeneralContext.Provider
      value={{
        user,
        setUser,
        darkMode,
        socket,
        setSocket,
        currentChatId,
        setCurrentChatId,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralProvider;
