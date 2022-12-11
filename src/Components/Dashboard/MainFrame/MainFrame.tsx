import React, { useContext, useEffect, useState } from "react";
import { DashboardContext } from "../../../Contexts/DashbaordContext";
import { TChat, TMessage } from "../../../Types/Types";
import Chat from "./Chat/Chat";
import InfoSidebar from "./InfoSidebar/InfoSidebar";

const MainFrame = () => {
  const { currentChatId, socket, user }: any = useContext(DashboardContext);
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
    socket.emit(
      "sendMessage",
      {
        id: currentChatId,
        messageContent,
        user: user?.username || "admin",
      },
      addMessage
    );
  };

  const onReceiveMessage = ({
    message,
    id,
  }: {
    message: TMessage;
    id: string;
  }) => {
    // if (id === currentChatId)
    // console.log("receiveMessage", message);
    addMessage(message);
  };

  const addMessage = (message: TMessage) => {
    setCurrentChatData((prev: any) => {
      return { ...prev, messages: [...prev.messages, message] };
    });
  };

  return (
    <section className=" h-full flex grow">
      {currentChatId ? (
        <>
          <Chat
            messages={currentChatData?.messages}
            sendMessage={sendMessage}
            costumerName={currentChatData?.costumerName}
          />
          <InfoSidebar currentChatData={currentChatData} />
        </>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          no chat selected
        </div>
      )}
    </section>
  );
};

export default MainFrame;
