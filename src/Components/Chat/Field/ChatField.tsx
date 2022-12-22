import React, { useContext, useEffect, useState } from "react";
import ChatKeyboard from "./ChatKeyboard";
import TextMessage from "../../Messages/TextMessage";
import { TMessage } from "../../../Types/Types";
import InputMessage from "../../Messages/InputMessage";
import {
  CustomerContext,
  TCustomerContext,
} from "../../../Contexts/CustomerContext";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001/", {
  closeOnBeforeunload: false,
});

const ChatField = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [messagesList, setMessagesList] = useState<TMessage[]>([]);

  const { chatId, setChatId } = useContext(CustomerContext) as TCustomerContext;

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
      socket.emit("newUserConnection", onNewUserConnection);
    });

    socket.on(
      "receiveMessage",
      ({ message, id }: { message: TMessage; id: string }) => {
        addMessage(message);
      }
    );

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    return () => {
      socket.off("connect");
      socket.off("receiveMessage");
      socket.off("disconnect");
    };
  }, []);

  const onNewUserConnection = (chatId: string) => {
    console.log("connected");
    setChatId(chatId);
  };

  const sendMessage = (messageContent: string) => {
    if (!isConnected) return;
    socket.emit(
      "sendMessage",
      {
        id: chatId,
        messageContent,
      },
      addMessage
    );
  };

  const addMessage = (message: TMessage): void => {
    setMessagesList((prev) => [...prev, message]);
  };

  return (
    <section className="">
      {socket ? (
        <>
          <div className="flex flex-col gap-1 w-full h-80 px-1 py-2 overflow-y-scroll">
            {messagesList.map((message: TMessage, index: number) => {
              if (message.type === "text")
                return (
                  <TextMessage
                    {...message}
                    key={index * new Date().getTime()}
                  />
                );
              if (message.type === "input")
                return (
                  <InputMessage
                    {...message}
                    key={index * new Date().getTime()}
                  />
                );
            })}
          </div>
          <ChatKeyboard sendMessage={sendMessage} />
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </section>
  );
};

export default ChatField;
