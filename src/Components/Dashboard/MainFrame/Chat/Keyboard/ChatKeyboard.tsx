import React, { FormEvent, useState } from "react";
import { TMessage } from "../../../../../Types/Types";
import ChatKeyboardActions from "./ChatKeyboardActions";

const ChatKeyboard = ({
  sendMessage,
}: {
  sendMessage: (msg: string) => void;
}) => {
  const [message, setMessage] = useState<string>();

  const sendMessageHandler = (e: FormEvent) => {
    if (!message) return;

    e.preventDefault();

    sendMessage(message);
    setMessage("");
  };

  return (
    <form
      className="w-full h-[25%] flex flex-col p-2 outline outline-gray-200 outline-[1px] rounded-lg"
      onSubmit={sendMessageHandler}
    >
      <textarea
        className="w-full h-full p-1 focus:outline-gray-200 outline-[1px] rounded-lg  resize-none dashboard-scrollbar "
        placeholder="Write here..."
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <ChatKeyboardActions />
    </form>
  );
};

export default ChatKeyboard;
