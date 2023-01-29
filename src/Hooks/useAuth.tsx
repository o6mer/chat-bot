import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  DashboardContext,
  TDashbaordContext,
} from "../Contexts/DashbaordContext";
import { SocketContext, TSocketContext } from "../Contexts/SocketContext";

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

  const login = async (
    email: string,
    password: string,
    setIsLoading: (isLoading: boolean) => void
  ) => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/user/login`,
        {
          email,
          password,
        }
      );

      const { token, id, username, role } = res.data;
      setToken(token);
      setUser({ id, username, role });
      setIsLoading(false);
    } catch (err: any) {
      setIsLoading(false);
      alert(err.response.data.message);
    }
  };

  const signup = async (
    email: string,
    password: string,
    username: string,
    setIsLoading: (isLoading: boolean) => void
  ) => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/user/signup`,
        {
          email: email,
          password: password,
          username: username,
          role: "admin",
        }
      );

      const data = res.data;
      setToken(data.token);
      setUser({ id: data.id, username: data.uername, role: data.role });
      setIsLoading(false);
    } catch (err: any) {
      alert(err.response.data.message);
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser({});
    setToken("");
    localStorage.removeItem("token");
    disconnectAdmin();
    navigate("/login");
  };

  const auth = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/user/auth`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

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
