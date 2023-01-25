import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import ErrorPage from "./Components/General/ErrorPage";
import Chat from "./Components/Chat/Chat";
import Dashboard from "./Components/Dashboard/Dashboard";
import DashboardContextProvider from "./Contexts/DashbaordContext";
import CustomerContextProvider from "./Contexts/CustomerContext";
import ProtectedRoutes from "./Components/General/ProtectedRoutes";
import SocketContextProvider from "./Contexts/SocketContext";
import LoginPage from "./Components/Landing/Login/LoginPage";
import SignupPage from "./Components/Landing/Signup/SignupPage";
import SocketContextUserProvider from "./Contexts/SocketContextUser";
import { io } from "socket.io-client";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/chat",
    element: <Chat />,
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

const socket = io("http://localhost:3002/", {
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
