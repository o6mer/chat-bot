import { createContext, ReactNode, useState } from "react";

export type TCustomerContext = {
  chatId: string;
  setChatId: (chatId: string) => void;
  darkmode: boolean;
  setDarkMode: (darkMode: boolean) => void;
};

export const CustomerContext = createContext({});

const CustomerContextProvider = ({ children }: { children: ReactNode }) => {
  const [chatId, setChatId] = useState<String>("");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <CustomerContext.Provider
      value={{
        chatId,
        setChatId,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};

export default CustomerContextProvider;
