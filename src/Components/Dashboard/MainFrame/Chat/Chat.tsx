import React, { useContext, useEffect, useState } from "react";
import { GeneralContext } from "../../../../Contexts/GeneralContext";
import { TChat, TMessage } from "../../../../Types/Types";
import SectionBreak from "../../General/SectionBreak";
import ChatHeader from "./Header/ChatHeader";
import ChatKeyboard from "./Keyboard/ChatKeyboard";
import ChatMain from "./Main/ChatMain";

const Chat = () => {
  const { currentChatId, socket }: any = useContext(GeneralContext);

  const [currentChatData, setCurrentChatData] = useState<TChat>();

  useEffect(() => {
    socket?.emit("getChatData", currentChatId, (chatData: TChat) => {
      setCurrentChatData(chatData);
    });
  }, [currentChatId]);

  useEffect(() => {
    if (!socket) return;
    socket.on("receiveMessage", onReceiveMessage);

    return () => {
      socket.removeAllListeners();
    };
  }, [socket]);

  const sendMessage = (messageContent: string) => {
    socket.emit("sendMessage", {
      id: currentChatData?._id,
      messageContent,
      addMessage,
    });
  };

  const onReceiveMessage = ({
    message,
    id,
  }: {
    message: TMessage;
    id: string;
  }) => {
    // if (id === currentChatId)
    addMessage(message);
  };

  const addMessage = (message: TMessage) => {
    setCurrentChatData((prev: any) => {
      prev.messages = [...prev.messages, message];
      const updatedChat: TChat = { ...prev };
      return updatedChat;
    });
  };

  return (
    <div className="h-full p-2 flex flex-col grow">
      <ChatHeader />
      <SectionBreak />
      <ChatMain messages={currentChatData?.messages} />
      <ChatKeyboard sendMessage={sendMessage} />
    </div>
  );
};

export default Chat;
