import React, { useContext, useState } from "react";
import {
  SocketContext,
  TSocketContext,
} from "../../../../Contexts/SocketContext";
import { TConversation, TFollowUp } from "../../../../Types/Types";
import Controlls from "./Controlls";
import List from "./List";

const ConversationEditor = () => {
  const { conversations, createConversation } = useContext(
    SocketContext
  ) as TSocketContext;

  const submitHandler = ({
    question,
    response,
    followUps,
  }: {
    question: string;
    response: string;
    followUps: Array<TFollowUp>;
  }) => {
    const newCovnersation: TConversation = {
      question,
      response,
      followUp: followUps,
    };
    console.log(newCovnersation);
    createConversation(newCovnersation);
  };
  return (
    <div className="w-full grow m-12 p-4 flex flex-col justify-between bg-white shadow-[0px_0px_25px_3px_rgba(0,0,0,0.07)] rounded-lg">
      <List conversations={conversations} />
      <Controlls conversations={conversations} submitHandler={submitHandler} />
    </div>
  );
};

export default ConversationEditor;
