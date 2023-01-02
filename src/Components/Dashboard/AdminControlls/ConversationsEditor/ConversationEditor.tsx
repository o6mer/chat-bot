import { useContext } from "react";
import {
  SocketContext,
  TSocketContext,
} from "../../../../Contexts/SocketContext";
import { TConversation } from "../../../../Types/Types";

import ListItem from "./ListItem";
const ConversationEditor = () => {
  const { conversations, createConversation } = useContext(
    SocketContext
  ) as TSocketContext;

  const addNewCovnersation = () => {
    createConversation({ question: "", response: "", followUp: [] });
  };

  return (
    <div className="w-full grow m-12 p-4 flex flex-col  bg-white shadow-[0px_0px_25px_3px_rgba(0,0,0,0.07)] rounded-lg">
      <header>
        <button className="border px-2 py-1" onClick={addNewCovnersation}>
          Add
        </button>
      </header>
      <ul className="flex gap-4">
        {conversations.map((conversation: TConversation) => {
          return (
            <ListItem
              conversation={conversation}
              conversations={conversations}
              key={conversation.id}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ConversationEditor;
