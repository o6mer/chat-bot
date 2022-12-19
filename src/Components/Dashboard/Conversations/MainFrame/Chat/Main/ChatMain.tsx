import React from "react";
import { TMessage } from "../../../../../../Types/Types";
import TextMessage from "../../../../../Messages/TextMessage";

const ChatMain = ({ messages }: { messages?: Array<TMessage> }) => {
  return (
    <div className=" h-full flex flex-col gap-1 overflow-y-scroll dashboard-scrollbar p-2">
      {/* <TextMessage writer={"user"} time="00:00" content="message  " /> */}
      {messages?.map((message: any, index) => (
        <TextMessage {...message} key={index + message.time} />
      ))}
    </div>
  );
};

export default ChatMain;
