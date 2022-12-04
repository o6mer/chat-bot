import React, { FormEvent, useState } from "react";
import { TypeMessage } from "./ChatField";

const ChatKeyboard = ({ addMessage }: any) => {
  const [messageContent, setMessageContent] = useState<string>("");

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const newMessage = {
      content: messageContent,
      writer: "user",
      time: `${new Date().getHours()}:${new Date().getMinutes()}`,
    };

    addMessage(newMessage);

    setMessageContent("");
  };

  const typeHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    setMessageContent(e.currentTarget.value);
  };

  return (
    <form action="" onSubmit={submitHandler}>
      <div className="w-full flex justify-between p-2">
        <input
          type="text"
          className="w-full"
          onChange={typeHandler}
          value={messageContent}
        />
        <button type="submit">{">"}</button>
      </div>
    </form>
  );
};

export default ChatKeyboard;
