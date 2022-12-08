import React, { FormEvent, useContext, useState } from "react";
import LabeldInput from "../../General/LabeldInput";
import axios from "axios";
import { GeneralContext } from "../../../Contextx/GeneralContext";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const { setUser }: any = useContext(GeneralContext);

  const navigate = useNavigate();

  const signupHandler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/api/user/signup", {
        email: email,
        password: password,
        username: username,
        roll: "admin",
      });

      const userData = res.data;

      setUser(userData);
      navigate("/dashboard");
    } catch (err: any) {
      alert(err.response.data.message);
    }

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
