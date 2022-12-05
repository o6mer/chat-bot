import React, { FormEvent, useState } from "react";
import LabeldInput from "../../General/LabeldInput";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (e: FormEvent) => {
    e.preventDefault();
    axios.post("http://localhost:3001/api/user/login", { email, password });
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
