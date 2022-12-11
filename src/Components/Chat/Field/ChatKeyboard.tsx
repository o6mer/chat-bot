import React, { useState } from "react";
import { TMessage } from "../../../Types/Types";

const ChatKeyboard = ({ sendMessage }: any) => {
  const [messageContent, setMessageContent] = useState<string>("");

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(messageContent);
    setMessageContent("");
  };

  const typeHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    setMessageContent(e.currentTarget.value);
  };

  const getForamtedTime = (): string => {
    const currentTime = new Date().toLocaleTimeString().slice(0, 4);

    return Number(currentTime[0]) < 10 ? `0${currentTime}` : currentTime;
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
