import React, { useContext, useEffect, useState } from "react";
import GeneralProvider, {
  GeneralContext,
} from "../../../Contexts/GeneralContext";
import ChatKeyboard from "./ChatKeyboard";
import ChatMessage from "./ChatMessage";

export type TMessage = {
  writer: string;
  time: string;
  content: string;
};

const ChatField = () => {
  const [messagesList, setMessagesList] = useState<TMessage[]>([]);
  const { socket }: any = useContext(GeneralContext);

  useEffect(() => {
    if (!socket) return;
    socket.on("connect", () => {
      console.log("connected");
      socket.on("recieveMessage", (recievedMessage: TMessage) => {
        addMessage(recievedMessage);
      });
    });
  }, [socket]);

  const sendMessage = (message: TMessage) => {
    addMessage(message);
    socket.emit("sendMessage", message);
  };

  const addMessage = (message: TMessage): void => {
    setMessagesList((prev) => [...prev, message]);
  };

  return (
    <section className="">
      <div className="flex flex-col gap-1 w-full h-80 px-1 py-2 overflow-y-scroll">
        {messagesList.map((message: TMessage, index: number) => {
          return <ChatMessage {...message} key={index} />;
        })}
      </div>
      <ChatKeyboard sendMessage={sendMessage} />
    </section>
  );
};

export default ChatField;
