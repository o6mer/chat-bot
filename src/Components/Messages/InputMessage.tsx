import React from "react";
import { TInputMessage } from "../../Types/Types";
import Message from "./Message";

const InputMessage = ({ writer, time, content }: TInputMessage) => {
  return (
    <Message writer={writer} time={time} type="text">
      <div className="w-full">
        <p>{content}</p>
        <input type="text" />
      </div>
    </Message>
  );
};

export default InputMessage;
