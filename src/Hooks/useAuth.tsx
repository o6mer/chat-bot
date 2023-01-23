import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  DashboardContext,
  TDashbaordContext,
} from "../Contexts/DashbaordContext";
import { SocketContext, TSocketContext } from "../Contexts/SocketContext";
import { TUser } from "../Types/Types";

export const useAuth = () => {
  const { token, setToken, setUser } = useContext(
    DashboardContext
  ) as TDashbaordContext;

  const { disconnectAdmin } = useContext(SocketContext) as TSocketContext;

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return;
    localStorage.setItem("token", token);
    navigate("/dashboard");
  }, [token]);

  const login = async (email: string, password: string) => {
    try {
      const res = await axios.post("http://localhost:3002/api/user/login", {
        email,
        password,
      });

      const { token, id, username, role } = res.data;
      setToken(token);
      setUser({ id, username, role });
    } catch (err: any) {
      alert(err.response.data.message);
    }
  };

  const signup = async (email: string, password: string, username: string) => {
    try {
      const res = await axios.post("http://localhost:3002/api/user/signup", {
        email: email,
        password: password,
        username: username,
        role: "admin",
      });

      const data = res.data;
      setToken(data.token);
      setUser({ id: data.id, username: data.uername, role: data.role });
    } catch (err: any) {
      alert(err.response.data.message);
    }
  };

  const logout = () => {
    setUser({});
    setToken("");
    localStorage.removeItem("token");
    disconnectAdmin();
    navigate("/");
  };

  const auth = async () => {
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

  const updateUser = async ({ token }: { token: string }) => {
    localStorage.setItem("token", token);
    await auth();
  };

  return { login, signup, logout, auth, updateUser };
};
