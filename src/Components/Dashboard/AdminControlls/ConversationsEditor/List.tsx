import { TConversation } from "../../../../Types/Types";

import ListItem from "./ListItem";

const List = ({
  conversations,
  deleteConversation,
}: {
  conversations: Array<TConversation>;
  deleteConversation: (conversationId?: string) => void;
}) => {
  return (
    <div>
      <ul className="flex gap-4">
        {conversations.map((conversation: TConversation) => {
          return (
            <ListItem
              conversation={conversation}
              key={conversation.id}
              deleteConversation={deleteConversation}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default List;
