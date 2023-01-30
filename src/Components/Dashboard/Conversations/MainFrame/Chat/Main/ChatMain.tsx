import React, { useEffect, useRef } from "react";
import { TMessage } from "../../../../../../Types/Types";
import MultipleChoiceMessage from "../../../../../Messages/MultipleChoiceMessage";
import TextMessage from "../../../../../Messages/TextMessage";

const ChatMain = ({ messages }: { messages?: Array<TMessage> }) => {
  const bottomRef: any = useRef(null);

  useEffect(() => {
    if (!bottomRef.current) return;
    bottomRef.current.scrollIntoView();
  }, [messages]);

  return (
    <div className=" h-full flex flex-col gap-1 overflow-y-scroll dashboard-scrollbar p-2">
      {messages?.map((message: TMessage, index) => {
        if (!message) return;
        if (message?.type === "text")
          return <TextMessage {...message} key={`${index}${message.time}`} />;
        else if (message?.type === "multiple")
          return (
            <MultipleChoiceMessage
              {...message}
              key={`${index}${message.time}`}
            />
          );
        else {
          return <TextMessage {...message} key={`${index}${message.time}`} />;
        }
      })}
      <div ref={bottomRef}></div>
    </div>
  );
};

export default ChatMain;
