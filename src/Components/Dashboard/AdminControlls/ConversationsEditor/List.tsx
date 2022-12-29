import { useContext } from "react";
import {
  SocketContext,
  TSocketContext,
} from "../../../../Contexts/SocketContext";
import { TConversation } from "../../../../Types/Types";

import ListItem from "./ListItem";

const List = () => {
  const { conversations } = useContext(SocketContext) as TSocketContext;

  const getConversationById = (conversationId: string) => {
    const conversation = conversations.find(
      (conversation) => conversation.id === conversationId
    );

    return conversation;
  };

  return (
    <div>
      <ul className="flex gap-4">
        {conversations.map((conversation: TConversation) => {
          return (
            <ListItem
              conversation={conversation}
              conversations={conversations}
              key={conversation.id}
              getConversationById={getConversationById}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default List;
