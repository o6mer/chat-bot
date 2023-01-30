import { useContext, useEffect } from "react";
import Conversations from "./Conversations/Conversations";
import NavigationBar from "./General/NavigationBar";
import {
  DashboardContext,
  TDashbaordContext,
} from "../../Contexts/DashbaordContext";
import AdminControlls from "./AdminControlls/AdminsControlls";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SocketContext, TSocketContext } from "../../Contexts/SocketContext";
import Settigns from "./Settings/Settigns";
import LoadingPage from "./General/LoadingPage";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const Dashboard = () => {
  const { screen, darkMode, setDarkMode } = useContext(
    DashboardContext
  ) as TDashbaordContext;
  const { isConnected, isLoading } = useContext(
    SocketContext
  ) as TSocketContext;

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(prefersDark);
  }, []);

  const dark = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1E2022",
      },
    },
  });
  const light = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#fff",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={darkMode ? dark : light}>
        <main
          className={` w-screen h-full flex relative ${
            darkMode ? "bg-darkPrimary text-white" : "bg-primary text-black"
          }`}
        >
          <NavigationBar />
          {!isLoading ? (
            <>
              {screen === 1 && <Conversations />}
              {screen === 2 && <AdminControlls />}
              {screen === 3 && <Settigns />}
            </>
          ) : (
            <LoadingPage />
          )}
        </main>
      </ThemeProvider>
    </>
  );
};

export default Dashboard;
