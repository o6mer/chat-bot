import { createContext, useState } from "react";

export const CustomerContext = createContext({});

const CustomerContextProvider = ({ children }: any) => {
  const [chatId, setChatId] = useState<String>("");
  const [darkMode, setDarkMode] = useState(false);
  const [socket, setSocket]: any = useState();

  return (
    <CustomerContext.Provider
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
    </CustomerContext.Provider>
  );
};

export default CustomerContextProvider;
