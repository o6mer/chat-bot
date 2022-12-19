import React from "react";
import { TTextMessage } from "../../Types/Types";
import { TMessage } from "../../Types/Types";

const ChatMessage = ({ writer, time, children }: TMessage) => {
  return (
    <div
      className={`flex flex-col max-w-[80%] w-max py-1 px-2 rounded-md ${
        writer === "Customer" ? "self-end bg-slate-200" : "bg-blue-200"
      }`}
    >
      <div className="flex justify-between gap-4 items-center">
        <p>{writer}</p>
        <p>{time.toString()}</p>
      </div>
      <div className="w-full flex">{children}</div>
    </div>
  );
};

export default ChatMessage;
