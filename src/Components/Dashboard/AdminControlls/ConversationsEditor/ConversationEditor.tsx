import React, { useContext } from "react";
import {
  SocketContext,
  TSocketContext,
} from "../../../../Contexts/SocketContext";

const ConversationEditor = () => {
  const { createConversation } = useContext(SocketContext) as TSocketContext;

  return (
    <div className="w-full h-full">
      <button
        onClick={() =>
          createConversation({
            question: "hello",
            response: "hii",
            followUp: [{ question: "sup", response: "suppp" }],
          })
        }
      >
        create convo
      </button>
    </div>
  );
};

export default ConversationEditor;
