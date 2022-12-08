import React from "react";
import TextMessage from "../../../../Messages/TextMessage";

const ChatMain = () => {
  return (
    <div className=" h-full flex flex-col gap-1 overflow-y-scroll dashboard-scrollbar p-2">
      <TextMessage writer={"user"} time="00:00" content="message  " />
      <TextMessage writer={"user"} time="00:00" content="message content" />
      <TextMessage writer={"admin"} time="00:00" content="message content" />
      <TextMessage writer={"user"} time="00:00" content="message content" />
      <TextMessage writer={"admin"} time="00:00" content="message content" />
      <TextMessage writer={"user"} time="00:00" content="message content" />
      <TextMessage writer={"user"} time="00:00" content="message content" />
      <TextMessage writer={"user"} time="00:00" content="message content" />
      <TextMessage writer={"user"} time="00:00" content="message content" />
      <TextMessage writer={"user"} time="00:00" content="message content" />
      <TextMessage writer={"user"} time="00:00" content="message content" />
      <TextMessage writer={"user"} time="00:00" content="message content" />
    </div>
  );
};

export default ChatMain;
