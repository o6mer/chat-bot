import React, { ReactNode, useContext, useEffect } from "react";
import {
  DashboardContext,
  TDashbaordContext,
} from "../../Contexts/DashbaordContext";
import { Route, Navigate } from "react-router-dom";
import axios from "axios";
import SocketContextProvider from "../../Contexts/SocketContext";

const ProtectedRoutes = ({ children }: { children: ReactNode }) => {
  const { token, setToken, setUser } = useContext(
    DashboardContext
  ) as TDashbaordContext;

  useEffect(() => {
    const relogin = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:3002/api/user/auth", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!token) return;

        setUser(res.data);
        setToken(token);
      } catch (err) {
        console.log(err);
      }
    };
    relogin();
  }, []);

  return <>{token ? children : <Navigate to={"/"} />}</>;
};

export default ProtectedRoutes;
