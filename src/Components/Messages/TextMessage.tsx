import React from "react";
import { TTextMessage } from "../../Types/Types";
import Message from "./Message";

const ChatMessage = ({ writer, time, content }: TTextMessage) => {
  return (
    <Message writer={writer} time={time} type="text">
      <p className="flex w-full">{content}</p>
    </Message>
  );
};

export default ChatMessage;
