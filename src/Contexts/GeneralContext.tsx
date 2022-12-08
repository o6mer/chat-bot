import React, { createContext, useEffect, useState } from "react";
import { TUser } from "../Types/Types";

export const GeneralContext = createContext({});

const GeneralProvider = ({ children }: any) => {
  const [user, setUser] = useState<TUser>();
  const [darkMode, setDarkMode] = useState(false);
  const [socket, setSocket]: any = useState();
  return (
    <GeneralContext.Provider
      value={{ user, setUser, darkMode, socket, setSocket }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralProvider;
