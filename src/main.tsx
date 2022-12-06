import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import ErrorPage from "./Components/General/ErrorPage";
import ChatWindow from "./Components/Chat/ChatWindow";
import GeneralContext from "./Contexts/GeneralContext";

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
    element: <ChatWindow />,
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
