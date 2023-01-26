import React, { FormEvent, useState } from "react";
import LabeldInput from "../../General/LabeldInput";
import { useAuth } from "../../../Hooks/useAuth";
import logo from "../../../Assets/logo.svg";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const loginHandler = async (e: FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <main className={`h-screen flex items-center flex-col relative`}>
      <img
        src={logo}
        alt=""
        className="absolute w-full h-full top-0 left-[50%] -translate-x-[50%] z-0 opacity-10"
      />
      <div className="w-full h-full flex justify-center items-center z-10">
        <form
          action=""
          className="flex flex-col gap-6 p-4 bg-secondary shadow-lg"
          onSubmit={loginHandler}
        >
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
