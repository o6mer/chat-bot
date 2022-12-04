import React from "react";
import { TypeMessage } from "./ChatField";

const ChatMessage = ({ writer, time, content }: TypeMessage) => {
  return (
    <div
      className={`flex flex-col w-min bg-green-400 py-1 px-2 rounded-md ${
        writer === "myUser" && "self-end"
      }`}
    >
      <div className="flex justify-between gap-4 items-center">
        <p>{writer}</p>
        <p>{time}</p>
      </div>
      <div>{content}</div>
    </div>
  );
};

export default ChatMessage;
