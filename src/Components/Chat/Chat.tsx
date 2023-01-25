import React, { useContext, useEffect, useState } from "react";
import ChatField from "./Field/ChatField";
import ChatHeader from "./Header/ChatHeader";
import { Socket } from "socket.io-client";

const Chat = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <main className="w-72 bg-gray-100">
        <ChatHeader />
        <ChatField />
      </main>
    </div>
  );
};

export default Chat;
