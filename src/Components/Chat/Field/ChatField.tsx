import React, { useContext, useEffect, useState } from "react";
import ChatKeyboard from "./ChatKeyboard";
import TextMessage from "../../Messages/TextMessage";
import { TMessage } from "../../../Types/Types";
import InputMessage from "../../Messages/InputMessage";
import { io } from "socket.io-client";
import { CustomerContext } from "../../../Contexts/CustomerContext";

const ChatField = () => {
  const [messagesList, setMessagesList] = useState<TMessage[]>([]);

  const { socket, setSocket, chatId, setChatId }: any =
    useContext(CustomerContext);

  useEffect(() => {
    setSocket(io("http://localhost:3001/", {}));
  }, []);

  useEffect(() => {
    if (!socket) return;
    socket?.on("connect", () => {
      console.log("connected");

      socket.emit("newUserConnection", onNewUserConnection);

      socket.on(
        "receiveMessage",
        ({ message, id }: { message: TMessage; id: string }) => {
          console.log("received message", message);
          addMessage(message);
        }
      );
    });
  }, [socket]);

  const onNewUserConnection = (chatId: string) => {
    setChatId(chatId);
  };

  const sendMessage = (messageContent: string) => {
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
