import { useContext, useEffect, useRef, useState } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Tooltip } from "@mui/material";
import { TConversation, TFollowUp } from "../../../../Types/Types";
import {
  SocketContext,
  TSocketContext,
} from "../../../../Contexts/SocketContext";
import ListItemEditMode from "./ListItemEditMode";
import Draggable, { ControlPosition } from "react-draggable";
import DragIndicatorOutlinedIcon from "@mui/icons-material/DragIndicatorOutlined";
const ListItem = ({
  conversation,
  conversations,
}: {
  conversation: TConversation;
  conversations: Array<TConversation>;
}) => {
  const [isHover, setIsHover] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const { updateConversation, deleteConversation } = useContext(
    SocketContext
  ) as TSocketContext;

  const nodeRef = useRef(null);

  const onEditClicked = () => {
    setEditMode(true);
  };

  const onDeleteClicked = () => {
    deleteConversation(conversation.id);
  };

  const savePosition = (e: any, position: any) => {
    const { x, y } = position;

    const updated = conversation;
    updated.position = { x, y };
    updateConversation(updated);
  };

  return (
    <Draggable
      bounds="parent"
      onStop={savePosition}
      defaultPosition={conversation.position}
      handle="strong"
      nodeRef={nodeRef}
    >
      <div
        ref={nodeRef}
        className="flex flex-col p-8 shadow-lg relative transition-all h-min bg-white w-fit"
        onMouseEnter={() => !editMode && setIsHover(true)}
        onMouseLeave={() => !editMode && setIsHover(false)}
      >
        <strong
          className="cursor-move absolute top-0 left-[50%] rotate-90"
          ref={nodeRef}
        >
          <DragIndicatorOutlinedIcon />
        </strong>

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
      </div>
    </Draggable>
  );
};

export default ListItem;
