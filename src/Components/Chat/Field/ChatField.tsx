import React, { useContext, useEffect, useState } from "react";
import ChatKeyboard from "./ChatKeyboard";
import TextMessage from "../../Messages/TextMessage";
import { TFollowUp, TMessage } from "../../../Types/Types";
import InputMessage from "../../Messages/InputMessage";
import MultipleChoiceMessage from "../../Messages/MultipleChoiceMessage";
import { Socket } from "socket.io-client";

const ChatField = ({
  socket,
  messagesList,
  chooseFollowUp,
  sendMessage,
}: {
  socket: Socket;
  messagesList: TMessage[];
  chooseFollowUp: (followUp: TFollowUp) => void;
  sendMessage: (message: string) => void;
}) => {
  return (
    <section className="">
      {socket ? (
        <>
          <div className="flex flex-col gap-1 w-full h-80 px-1 py-2 overflow-y-scroll">
            {messagesList?.map((message: TMessage, index: number) => {
              if (message?.type === "text")
                return (
                  <TextMessage
                    {...message}
                    key={index * new Date().getTime()}
                  />
                );
              if (message?.type === "input")
                return (
                  <InputMessage
                    {...message}
                    key={index * new Date().getTime()}
                  />
                );
              if (message?.type === "multiple")
                return (
                  <MultipleChoiceMessage
                    {...message}
                    chooseFollowUp={chooseFollowUp}
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
