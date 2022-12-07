import React from "react";
import { TTextMessage } from "../../../Types/Types";
import Message from "./Message";

const ChatMessage = ({ writer, time, content }: TTextMessage) => {
  return (
    <Message writer={writer} time={time} type="text">
      <div>{content}</div>
    </Message>
  );
};

export default ChatMessage;
