import React from "react";
import SectionBreak from "../../General/SectionBreak";
import ChatHeader from "./Header/ChatHeader";
import ChatKeyboard from "./Keyboard/ChatKeyboard";
import ChatMain from "./Main/ChatMain";

const Chat = () => {
  return (
    <div className="h-full p-2 flex flex-col grow">
      <ChatHeader />
      <SectionBreak />
      <ChatMain />
      <ChatKeyboard />
    </div>
  );
};

export default Chat;
