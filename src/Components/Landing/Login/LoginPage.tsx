import React, { FormEvent, useContext, useState, useEffect } from "react";
import LabeldInput from "../../General/LabeldInput";
import axios from "axios";
import {
  DashboardContext,
  TDashbaordContext,
} from "../../../Contexts/DashbaordContext";
import { useNavigate, redirect } from "react-router-dom";
import { useAuth } from "../../../Hooks/useAuth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const loginHandler = async (e: FormEvent) => {
    e.preventDefault();
    await login(email, password);
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
