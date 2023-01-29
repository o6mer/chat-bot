import React, { FormEvent, useRef, useState, useContext } from "react";
import {
  SocketContext,
  TSocketContext,
} from "../../../../../../Contexts/SocketContext";
import ChatKeyboardActions from "./ChatKeyboardActions";

const ChatKeyboard = ({}: {}) => {
  const [message, setMessage] = useState<string>();
  const formRef = useRef<HTMLFormElement>(null);

  const { sendMessage } = useContext(SocketContext) as TSocketContext;

  const sendMessageHandler = (e: FormEvent) => {
    e.preventDefault();

    if (!message?.trim()) return;

    sendMessage(message);
    setMessage("");
  };

  const typingHandler = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setMessage(e.currentTarget.value);
  };

  const checkSubmit = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key == "Enter" && e.shiftKey == true) {
      formRef?.current?.requestSubmit();
      e.preventDefault();
    }
  };

  return (
    <form
      className="w-full h-[25%] flex flex-col p-2 outline-secondary outline-[1px] rounded-lg"
      onSubmit={sendMessageHandler}
      ref={formRef}
    >
      <textarea
        className="w-full h-full text-black p-1 border-secondary border border-solid focus:outline-gray-200 outline-[1px] rounded-lg  resize-none dashboard-scrollbar "
        placeholder="Write here..."
        value={message}
        onChange={typingHandler}
        onKeyDown={checkSubmit}
      />
      <p className="text-xs text-gray-500 py-1">
        * <b>Enter</b>: New line. <b>Shift+Enter</b>: Send
      </p>
      <ChatKeyboardActions setMessage={setMessage} />
    </form>
  );
};

export default ChatKeyboard;
