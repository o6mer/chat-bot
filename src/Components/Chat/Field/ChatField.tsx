import React, { useContext, useEffect, useState } from "react";
import { GeneralContext } from "../../../Contexts/GeneralContext";
import ChatKeyboard from "./ChatKeyboard";
import TextMessage from "../Messages/TextMessage";
import { TMessage } from "../../../Types/Types";
import InputMessage from "../Messages/InputMessage";
import { io } from "socket.io-client";

const ChatField = () => {
  const [messagesList, setMessagesList] = useState<TMessage[]>([]);

  const { socket, setSocket }: any = useContext(GeneralContext);

  useEffect(() => {
    setSocket(
      io("http://localhost:3001/", {
        closeOnBeforeunload: false,
      })
    );
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on("connect", () => {
      console.log("connected");

      socket.emit("newConnection");

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
          if (message.type === "text")
            return (
              <TextMessage {...message} key={index * new Date().getTime()} />
            );
          if (message.type === "input")
            return (
              <InputMessage {...message} key={index * new Date().getTime()} />
            );
        })}
      </div>
      <ChatKeyboard sendMessage={sendMessage} />
    </section>
  );
};

export default ChatField;
