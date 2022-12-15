import React, { FormEvent, useRef, useState } from "react";
import { TMessage } from "../../../../../Types/Types";
import ChatKeyboardActions from "./ChatKeyboardActions";

const ChatKeyboard = ({
  sendMessage,
}: {
  sendMessage: (msg: string) => void;
}) => {
  const [message, setMessage] = useState<string>();
  const formRef = useRef<HTMLFormElement>(null);

  const sendMessageHandler = (e: FormEvent) => {
    if (!message) return;

    e.preventDefault();

    sendMessage(message);
    setMessage("");
  };

  const typingHandler = (e: any) => {
    setMessage(e.target.value);
  };

  const checkSubmit = (e: any) => {
    if (e.keyCode == 13 && e.shiftKey == true)
      formRef?.current?.requestSubmit();
  };

  return (
    <form
      className="w-full h-[25%] flex flex-col p-2 outline outline-gray-200 outline-[1px] rounded-lg"
      onSubmit={sendMessageHandler}
      ref={formRef}
    >
      <textarea
        className="w-full h-full p-1 focus:outline-gray-200 outline-[1px] rounded-lg  resize-none dashboard-scrollbar "
        placeholder="Write here..."
        value={message}
        onChange={typingHandler}
        onKeyDown={checkSubmit}
      />
      <ChatKeyboardActions setMessage={setMessage} />
    </form>
  );
};

export default ChatKeyboard;
