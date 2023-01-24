import React, { useContext, useEffect, useState } from "react";
import ChatField from "./Field/ChatField";
import ChatHeader from "./Header/ChatHeader";
import { io } from "socket.io-client";
import { TFollowUp, TMessage } from "../../Types/Types";
import {
  CustomerContext,
  TCustomerContext,
} from "../../Contexts/CustomerContext";

const socket = io("http://localhost:3002/", {
  closeOnBeforeunload: false,
});
const Chat = () => {
  const [isConnected, setIsConnected] = useState(false);
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

  const chooseFollowUp = (followUp: TFollowUp) => {
    sendMessage(followUp.input);
    getResponse(followUp.conversation);
  };

  const getResponse = (conversationId: string) => {
    socket.emit("getResponse", { conversationId, chatId });
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
    <div className="w-full h-full flex justify-center items-center">
      <main className="w-72 bg-gray-100">
        <ChatHeader />
        <ChatField
          socket={socket}
          messagesList={messagesList}
          chooseFollowUp={chooseFollowUp}
          sendMessage={sendMessage}
        />
      </main>
    </div>
  );
};

export default Chat;
