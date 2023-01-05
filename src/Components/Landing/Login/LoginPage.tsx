import React, { FormEvent, useContext, useState, useEffect } from "react";
import LabeldInput from "../../General/LabeldInput";
import axios from "axios";
import {
  DashboardContext,
  TDashbaordContext,
} from "../../../Contexts/DashbaordContext";
import { useNavigate, redirect } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { token, setToken, setUser } = useContext(
    DashboardContext
  ) as TDashbaordContext;

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return;
    localStorage.setItem("token", token);
    navigate("/dashboard");
  }, [token]);

  const loginHandler = async (e: FormEvent) => {
    e.preventDefault();
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

  return (
    <form action="" className="flex flex-col gap-6" onSubmit={loginHandler}>
      <div>
        <LabeldInput
          type="email"
          label="Email:"
          state={email}
          setState={setEmail}
        />
        <LabeldInput
          type="password"
          label="Password:"
          state={password}
          setState={setPassword}
        />
      </div>
      <button type="submit" className="bg-gray-200">
        Login
      </button>
    </form>
  );
};

export default LoginPage;
