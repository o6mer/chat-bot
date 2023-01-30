import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import ErrorPage from "./Components/General/ErrorPage";
import Dashboard from "./Components/Dashboard/Dashboard";
import DashboardContextProvider from "./Contexts/DashbaordContext";
import CustomerContextProvider from "./Contexts/CustomerContext";
import ProtectedRoutes from "./Components/General/ProtectedRoutes";
import SocketContextProvider from "./Contexts/SocketContext";
import LoginPage from "./Components/Landing/Login/LoginPage";
import SignupPage from "./Components/Landing/Signup/SignupPage";
import SocketContextUserProvider from "./Contexts/SocketContextUser";
import { io } from "socket.io-client";
import { createTheme, ThemeProvider } from "@mui/material";

const landingTheme = createTheme({
  palette: {
    primary: {
      main: "#232323",
      dark: "#343434",
      contrastText: "#fff",
    },
    secondary: {
      main: "#fff",
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: (
      <ThemeProvider theme={landingTheme}>
        <LoginPage />
      </ThemeProvider>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: (
      <ThemeProvider theme={landingTheme}>
        <SignupPage />
      </ThemeProvider>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoutes>
        <Dashboard />
      </ProtectedRoutes>
    ),
    errorElement: <ErrorPage />,
  },
]);

const socket = io(import.meta.env.VITE_API_URL, {
  closeOnBeforeunload: false,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DashboardContextProvider>
      <CustomerContextProvider>
        <SocketContextProvider socket={socket}>
          <SocketContextUserProvider socket={socket}>
            <RouterProvider router={router} />
          </SocketContextUserProvider>
        </SocketContextProvider>
      </CustomerContextProvider>
    </DashboardContextProvider>
  </React.StrictMode>
);
