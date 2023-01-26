import React, { FormEvent, useState } from "react";
import LabeldInput from "../../General/LabeldInput";
import { useAuth } from "../../../Hooks/useAuth";
import logo from "../../../Assets/logo.svg";
import StyledInput from "../../General/StyledInput";
import callCenterImage from "../../../Assets/call_center.jpg";
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
      <div className="w-fit h-full flex justify-center items-center z-10">
        <div className="w-fit flex p-8 bg-darkPrimary shadow-lg rounded-lg text-white ">
          <form onSubmit={loginHandler}>
            <p className="text-xl font-bold">Login to get Started</p>
            <label className="flex flex-col" htmlFor="email">
              Email
              <StyledInput
                id="email"
                type="email"
                value={email}
                placeholder="Your Email"
                onChange={setEmail}
              />
            </label>
            <label htmlFor="password" className="flex flex-col">
              Password
              <StyledInput
                id="password"
                placeholder="Your Password"
                type="password"
                value={password}
                onChange={setPassword}
              />
            </label>
            <button type="submit" className="bg-gray-200">
              Login
            </button>
          </form>
          <div className="w-[50%]">
            <img src={callCenterImage} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
