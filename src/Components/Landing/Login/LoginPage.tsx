import React, { FormEvent, useState } from "react";
import LabeldInput from "../../General/LabeldInput";
import { useAuth } from "../../../Hooks/useAuth";
import logo from "../../../assets/logo.svg";
import StyledInput from "../../General/StyledInput";
import callCenterImage from "../../../assets/call_center.jpg";
import LoadingButton from "@mui/lab/LoadingButton";
import { Button } from "@mui/material";
import LoadingPage from "../../Dashboard/General/LoadingPage";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();

  const loginHandler = async (e: FormEvent) => {
    e.preventDefault();
    await login(email, password, setIsLoading);
  };

  return (
    <main
      className={`relative flex h-screen flex-col items-center justify-center`}
    >
      <nav className="absolute top-0 right-0 z-10 flex w-full justify-center px-4 py-2 text-xl font-bold">
        <div className="w-full max-w-4xl">
          <Link to="/" className="flex items-center text-black ">
            <img src={logo} className="w-12" />
            <p>Helpster</p>
          </Link>
        </div>
      </nav>
      <img
        src={logo}
        alt=""
        className="absolute top-0 left-[50%] z-0 aspect-square h-full w-full -translate-x-[50%] opacity-10"
      />
      <div className="z-10 flex w-full max-w-3xl rounded-lg bg-darkPrimary text-white shadow-lg ">
        <div className="flex h-full w-full flex-col justify-center p-4 lg:w-[50%]">
          <p className="text-4xl font-bold">Login to get Started</p>
          <form
            onSubmit={loginHandler}
            className="flex h-full w-full flex-col justify-center gap-2"
          >
            {isLoading ? (
              <div className="h-full w-full py-4">
                <LoadingPage />
              </div>
            ) : (
              <>
                <label className="flex flex-col" htmlFor="email">
                  Email
                  <StyledInput
                    id="email"
                    type="email"
                    value={email}
                    placeholder="Your Email"
                    onChange={(e: React.FormEvent<HTMLInputElement>) =>
                      setEmail(e.currentTarget.value)
                    }
                  />
                </label>
                <label htmlFor="password" className="flex flex-col">
                  Password
                  <StyledInput
                    id="password"
                    placeholder="Your Password"
                    type="password"
                    value={password}
                    onChange={(e: React.FormEvent<HTMLInputElement>) =>
                      setPassword(e.currentTarget.value)
                    }
                  />
                </label>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    width: "100%",
                  }}
                >
                  Login
                </Button>
              </>
            )}
            <Link
              to="/signup"
              className="underline transition-all hover:text-secondary"
            >
              Don't have an account?
            </Link>
          </form>
        </div>
        <img
          src={callCenterImage}
          alt=""
          className="hidden h-min w-[50%] lg:inline-block"
        />
      </div>
    </main>
  );
};

export default LoginPage;
