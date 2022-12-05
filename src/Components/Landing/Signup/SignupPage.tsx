import React, { FormEvent, useState } from "react";
import LabeldInput from "../../General/LabeldInput";
import axios from "axios";
import { clear } from "console";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const signupHandler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      console.log(email, password, username);
      const res = await axios.post("http://localhost:3001/api/user/signup", {
        email,
        password,
        username,
      });
      console.log(res.data);
    } catch (err) {
      alert(err);
    }

    clearForm();
    // const newUser = await res.json();
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
