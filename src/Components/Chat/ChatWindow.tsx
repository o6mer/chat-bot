import React from "react";
import ChatField from "./ChatField/ChatField";
import ChatHeader from "./ChatHeader/ChatHeader";

const ChatWindow = () => {
  return (
    <main className="w-72 bg-gray-200">
      <ChatHeader />
      <ChatField />
    </main>
  );
};

export default ChatWindow;
