import React, { createContext, useEffect, useState } from "react";
import { TChat, TUser } from "../Types/Types";

export const CostumerContext = createContext({});

const CostumerContextProvider = ({ children }: any) => {
  const [chatId, setChatId] = useState<String>("");
  const [darkMode, setDarkMode] = useState(false);
  const [socket, setSocket]: any = useState();

  return (
    <CostumerContext.Provider
      value={{
        chatId,
        setChatId,
        darkMode,
        setDarkMode,
        socket,
        setSocket,
      }}
    >
      {children}
    </CostumerContext.Provider>
  );
};

export default CostumerContextProvider;
