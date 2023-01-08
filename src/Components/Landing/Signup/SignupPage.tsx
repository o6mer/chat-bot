import React, { FormEvent, useContext, useState, useEffect } from "react";
import LabeldInput from "../../General/LabeldInput";
import axios from "axios";
import {
  DashboardContext,
  TDashbaordContext,
} from "../../../Contexts/DashbaordContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Hooks/useAuth";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const { signup } = useAuth();

  const signupHandler = async (e: FormEvent) => {
    e.preventDefault();
    await signup(email, password, username);
    clearForm();
  };

  const clearForm = () => {
    setEmail("");
    setPassword("");
    setUsername("");
  };

  return (
    <form action="" className="flex flex-col gap-6" onSubmit={signupHandler}>
      <div>
        <LabeldInput
          type="username"
          label="Username:"
          state={username}
          setState={setUsername}
        />
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
        Signup
      </button>
    </form>
  );
};

export default SignupPage;
