import React from "react";
import { TTextMessage } from "../../../Types/Types";
import { TMessage } from "../../../Types/Types";

const ChatMessage = ({ writer, time, children }: TMessage) => {
  return (
    <div
      className={`flex flex-col w-min py-1 px-2 rounded-md ${
        writer === "user" ? "self-end bg-green-400" : "bg-blue-400"
      }`}
    >
      <div className="flex justify-between gap-4 items-center">
        <p>{writer}</p>
        <p>{time}</p>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default ChatMessage;
