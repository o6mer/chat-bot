import React from "react";
import { TMessage } from "../../../../../../Types/Types";
import MultipleChoiceMessage from "../../../../../Messages/MultipleChoiceMessage";
import TextMessage from "../../../../../Messages/TextMessage";

const ChatMain = ({ messages }: { messages?: Array<TMessage> }) => {
  return (
    <div className=" h-full flex flex-col gap-1 overflow-y-scroll dashboard-scrollbar p-2">
      {messages?.map((message: TMessage, index) => {
        if (message.type === "text")
          return <TextMessage {...message} key={`${index}${message.time}`} />;
        if (message.type === "multiple")
          return (
            <MultipleChoiceMessage
              {...message}
              key={`${index}${message.time}`}
            />
          );
      })}
    </div>
  );
};

export default ChatMain;
