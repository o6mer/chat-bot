import React, { useState } from "react";
import ChatKeyboard from "./ChatKeyboard";
import ChatMessage from "./ChatMessage";

export type TypeMessage = {
  writer: string;
  time: string;
  content: string;
};

const ChatField = () => {
  const [messagesList, setMessagesList] = useState<TypeMessage[]>([]);

  const addMessage = (msg: TypeMessage): void => {
    setMessagesList((prev) => [...prev, msg]);
  };

  return (
    <section className="">
      <div className="flex flex-col gap-1 w-full h-80 px-1 py-2 overflow-y-scroll">
        {messagesList.map((msg: TypeMessage) => {
          return <ChatMessage {...msg} key={new Date().getTime()} />;
        })}
      </div>
      <ChatKeyboard addMessage={addMessage} />
    </section>
  );
};

export default ChatField;
