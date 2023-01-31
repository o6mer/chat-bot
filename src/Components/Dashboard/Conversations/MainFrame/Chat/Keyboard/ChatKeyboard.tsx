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
      className="flex h-[25%] w-full flex-col rounded-lg p-2 outline-[1px] outline-secondary"
      onSubmit={sendMessageHandler}
      ref={formRef}
    >
      <textarea
        className="dashboard-scrollbar h-full w-full resize-none rounded-lg border border-solid border-secondary p-1 text-black  outline-[1px] focus:outline-gray-200 "
        placeholder="Write here..."
        value={message}
        onChange={typingHandler}
        onKeyDown={checkSubmit}
      />
      <p className="py-1 text-xs text-gray-500">
        * <b>Enter</b>: New line. <b>Shift+Enter</b>: Send
      </p>
      <ChatKeyboardActions setMessage={setMessage} />
    </form>
  );
};

export default ChatKeyboard;
