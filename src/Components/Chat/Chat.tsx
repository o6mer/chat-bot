import React from "react";
import ChatField from "./ChatField/ChatField";
import ChatHeader from "./ChatHeader/ChatHeader";

const Chat = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <main className="w-72 bg-gray-200">
        <ChatHeader />
        <ChatField />
      </main>
    </div>
  );
};

export default Chat;
