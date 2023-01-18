import React, { useContext, useEffect, useState } from "react";
import Conversations from "./Conversations/Conversations";
import NavigationBar from "./General/NavigationBar";
import {
  DashboardContext,
  TDashbaordContext,
} from "../../Contexts/DashbaordContext";
import AdminControlls from "./AdminControlls/AdminsControlls";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import SocketContextProvider, {
  SocketContext,
  TSocketContext,
} from "../../Contexts/SocketContext";
import axios from "axios";
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
  const { screen } = useContext(DashboardContext) as TDashbaordContext;
  const { isConnected } = useContext(SocketContext) as TSocketContext;

  const theme = createTheme({
    palette: {
      primary: {
        light: "#F0F5F9",
        main: "#1E2022",
        dark: "#1E2022",
        contrastText: "#1E2022",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });
  return (
    <>
      {isConnected ? (
        <ThemeProvider theme={theme}>
          <main className="w-full h-full flex">
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
