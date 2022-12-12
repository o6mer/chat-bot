import React, { useContext, useEffect, useState } from "react";
import { TChat, TMessage } from "../../../../Types/Types";
import SectionBreak from "../../General/SectionBreak";
import ChatHeader from "./Header/ChatHeader";
import ChatKeyboard from "./Keyboard/ChatKeyboard";
import ChatMain from "./Main/ChatMain";

const Chat = ({
  messages,
  sendMessage,
  costumerName,
}: {
  messages?: Array<TMessage>;
  sendMessage: (msg: string) => void;
  costumerName?: string;
}) => {
  return (
    <div className="h-full p-2 flex flex-col grow">
      <ChatHeader costumerName={costumerName} />
      <SectionBreak />
      <ChatMain messages={messages} />
      <ChatKeyboard sendMessage={sendMessage} />
    </div>
  );
};

export default Chat;
