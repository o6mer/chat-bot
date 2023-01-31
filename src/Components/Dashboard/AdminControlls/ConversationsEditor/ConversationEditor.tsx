import { useContext, useState } from "react";
import {
  SocketContext,
  TSocketContext,
} from "../../../../Contexts/SocketContext";
import { TConversation } from "../../../../Types/Types";
import ListItem from "./ListItem";
import SaveButton from "../../../General/Buttons/SaveButton";
import NewButton from "../../../General/Buttons/NewButton";
import {
  DashboardContext,
  TDashbaordContext,
} from "../../../../Contexts/DashbaordContext";
import LoadingPage from "../../General/LoadingPage";

const ConversationEditor = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { conversations, createConversation, saveAllConversations } =
    useContext(SocketContext) as TSocketContext;
  const { darkMode } = useContext(DashboardContext) as TDashbaordContext;

  const addNewCovnersation = () => {
    createConversation({
      question: "",
      response: "",
      followUp: [],
      position: { x: 600, y: 200 },
    });
  };

  return (
    <div
      className={`m-12 flex w-full grow flex-col p-4  ${
        darkMode ? "bg-darkPrimary" : "bg-primary"
      }  rounded-lg shadow-[0px_0px_25px_3px_rgba(0,0,0,0.07)]`}
    >
      <header className="flex gap-2">
        <NewButton onClick={addNewCovnersation} />
        <SaveButton onClick={() => saveAllConversations(setIsLoading)} />
      </header>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <ul className="box relative flex h-full w-full shrink-0 gap-4">
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
      )}
    </div>
  );
};

export default ConversationEditor;
