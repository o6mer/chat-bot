import React, { FormEvent, useState } from "react";
import LabeldInput from "../../General/LabeldInput";
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
    <main className="h-screen -screen flex justify-center items-center">
      <div className="bg-gray-400 p-4">
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
      </div>
    </main>
  );
};

export default LoginPage;
