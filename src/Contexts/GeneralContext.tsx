import React, { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

export const GeneralContext = createContext({});

const GeneralProvider = ({ children }: any) => {
  const [user, setUser] = useState();
  const [darkMode, setDarkMode] = useState(false);
  const [socket, setSocket]: any = useState();

  useEffect(() => {
    setSocket(
      io("http://localhost:3001/", {
        closeOnBeforeunload: false,
      })
    );
  }, []);

  return (
    <GeneralContext.Provider value={{ user, setUser, darkMode, socket }}>
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralProvider;
