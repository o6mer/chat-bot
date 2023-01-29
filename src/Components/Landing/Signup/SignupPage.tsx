import React, { FormEvent, useState } from "react";
import LabeldInput from "../../General/LabeldInput";
import { useAuth } from "../../../Hooks/useAuth";
import logo from "../../../Assets/logo.svg";
import StyledInput from "../../General/StyledInput";
import callCenterImage from "../../../Assets/call_center.jpg";
import LoadingButton from "@mui/lab/LoadingButton";
import { Button } from "@mui/material";
import LoadingPage from "../../Dashboard/General/LoadingPage";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const { signup } = useAuth();

  const signupHandler = async (e: FormEvent) => {
    e.preventDefault();
    await signup(email, password, username, setIsLoading);
  };

  const clearForm = () => {
    setEmail("");
    setPassword("");
    setUsername("");
  };

  return (
    <main
      className={`h-screen flex flex-col items-center justify-center relative`}
    >
      <nav className="w-full absolute top-0 right-0 px-4 py-2 z-10 text-xl font-bold flex justify-center">
        <div className="max-w-4xl w-full">
          <Link to="/" className="flex items-center text-black ">
            <img src={logo} className="w-12" />
            <p>Helpster</p>
          </Link>
        </div>
      </nav>
      <img
        src={logo}
        alt=""
        className="absolute w-full h-full top-0 left-[50%] -translate-x-[50%] z-0 opacity-10"
      />
      <div className="w-full max-w-3xl  flex z-10 bg-darkPrimary shadow-lg rounded-lg text-white ">
        <div className="w-[50%] h-full p-4 flex flex-col justify-center">
          <p className="text-4xl font-bold">Create Account</p>
          {isLoading ? (
            <LoadingPage />
          ) : (
            <>
              <form
                onSubmit={signupHandler}
                className="w-full h-full flex flex-col gap-2 justify-center"
              >
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
                <label className="flex flex-col" htmlFor="email">
                  Username
                  <StyledInput
                    id="username"
                    type="text"
                    value={username}
                    placeholder="Your Username"
                    onChange={(e: React.FormEvent<HTMLInputElement>) =>
                      setUsername(e.currentTarget.value)
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
                  Create Your Account
                </Button>
                <Link
                  to="/login"
                  className="underline hover:text-secondary transition-all"
                >
                  Already have an account?
                </Link>
              </form>
            </>
          )}
        </div>
        <img src={callCenterImage} alt="" className="w-[50%] h-min" />
      </div>
    </main>
  );
};

export default SignupPage;
