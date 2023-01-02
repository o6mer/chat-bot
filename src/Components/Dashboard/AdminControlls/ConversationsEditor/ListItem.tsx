import { useContext, useEffect, useState } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Fade, Modal, Tooltip } from "@mui/material";
import { TConversation, TFollowUp } from "../../../../Types/Types";
import {
  SocketContext,
  TSocketContext,
} from "../../../../Contexts/SocketContext";
import ListItemEditMode from "./ListItemEditMode";

const ListItem = ({
  conversation,
  conversations,
}: {
  conversation: TConversation;
  conversations: Array<TConversation>;
}) => {
  const [isHover, setIsHover] = useState(false);
  const [editMode, setEditMode] = useState(false);
  // const [followUps, setFollowUps] = useState<Array<TConversation>>([]);

  const { updateConversation, deleteConversation } = useContext(
    SocketContext
  ) as TSocketContext;

  const onEditClicked = () => {
    setEditMode(true);
  };

  const onDeleteClicked = () => {
    deleteConversation(conversation.id);
  };

  return (
    <li
      className="flex flex-col p-8 shadow-lg relative transition-all"
      onMouseEnter={() => !editMode && setIsHover(true)}
      onMouseLeave={() => !editMode && setIsHover(false)}
    >
      {editMode ? (
        <ListItemEditMode
          conversation={conversation}
          conversations={conversations}
          setEditMode={setEditMode}
          updateConversation={updateConversation}
        />
      ) : (
        <>
          <div>
            <p>Question: {conversation.question}</p>
            <p>Response: {conversation.response}</p>
            <ul className="flex flex-col list-disc ">
              {conversation.followUp.length ? (
                conversation.followUp.map((followUp, index) => {
                  return (
                    <li
                      key={"edit_follow-up" + conversation.id + index}
                      // onClick={() =>
                      //   showFollowUpConversation(followUp.conversation)
                      // }
                    >
                      <p>Title: {followUp.input}</p>
                      <p>
                        Covnersation Id:{" "}
                        {followUp.conversation === "defualt"
                          ? "none"
                          : followUp.conversation}
                      </p>
                    </li>
                  );
                })
              ) : (
                <p>No follow-up questions</p>
              )}
            </ul>
          </div>

          {isHover && (
            <div
              className={`${
                isHover ? "opacity-100" : "opacity-0"
              } absolute top-2 right-2 justify-end h-max  transition-all `}
            >
              <Tooltip title="Edit" arrow>
                <button
                  className="transition-all hover:text-gray-700 fill-white"
                  onClick={onEditClicked}
                >
                  <EditOutlinedIcon fontSize="small" />
                </button>
              </Tooltip>
              <Tooltip title="Delete" arrow>
                <button
                  className="transition-all hover:text-gray-700 fill-white"
                  onClick={onDeleteClicked}
                >
                  <DeleteOutlineOutlinedIcon fontSize="small" />
                </button>
              </Tooltip>
            </div>
          )}
        </>
      )}
    </li>
  );
};

export default ListItem;
