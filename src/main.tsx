import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import ErrorPage from "./Components/General/ErrorPage";
import Chat from "./Components/Chat/Chat";
import GeneralContext from "./Contexts/GeneralContext";
import Dashboard from "./Components/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/chat",
    element: <Chat />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GeneralContext>
      <RouterProvider router={router} />
    </GeneralContext>
  </React.StrictMode>
);
