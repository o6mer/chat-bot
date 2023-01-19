import { useContext } from "react";
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

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const Dashboard = () => {
  const { screen, darkMode } = useContext(
    DashboardContext
  ) as TDashbaordContext;
  const { isConnected } = useContext(SocketContext) as TSocketContext;

  const light = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#F0F5F9",
      },
    },
  });

  const dark = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1E2022",
        contrastText: "#F0F5F9",
      },
    },
  });

  return (
    <>
      {isConnected ? (
        <ThemeProvider theme={darkMode ? dark : light}>
          <main
            className={`w-full h-full flex ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <NavigationBar />
            {screen === 1 && <Conversations />}
            {screen === 2 && <AdminControlls />}
            {screen === 3 && <Settigns />}
          </main>
        </ThemeProvider>
      ) : (
        <p>Loadig...</p>
      )}
    </>
  );
};

export default Dashboard;
