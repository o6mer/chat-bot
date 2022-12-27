import React, { useState } from "react";
import { TConversation } from "../../../../Types/Types";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Tooltip } from "@mui/material";

const List = ({ conversations }: { conversations: Array<TConversation> }) => {
  return (
    <div>
      <ul className="flex gap-4">
        {conversations.map((conversation: TConversation) => {
          return <ListItem conversation={conversation} key={conversation.id} />;
        })}
      </ul>
    </div>
  );
};

const ListItem = ({ conversation }: { conversation: TConversation }) => {
  const [isHover, setIsHover] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const onEditClicked = () => {
    setEditMode(true);
  };

  return (
    <li
      className="flex flex-col p-4 shadow-lg relative"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div>Question: {conversation.question}</div>
      <div>response: {conversation.response}</div>
      <div>
        followUp:{" "}
        {conversation.followUp.map((followUp) => (
          <div key={`${followUp.conversation}+${followUp.input}`}>
            {followUp.input}
          </div>
        ))}
      </div>
      <div
        className={`${
          isHover ? "opacity-100 flex" : "opacity-0  hidden "
        } absolute top-2 right-2 justify-end h-max  transition-all `}
      >
        <button
          className="transition-all hover:text-gray-700 fill-white"
          onClick={onEditClicked}
        >
          <EditOutlinedIcon fontSize="small" />
        </button>
        <button className="transition-all hover:text-gray-700 fill-white">
          <DeleteOutlineOutlinedIcon fontSize="small" />
        </button>
      </div>
      <div
        className={`${
          editMode ? "opacity-100 flex" : "opacity-0  hidden "
        } gap-1 absolute bottom-2 right-2`}
      >
        <Tooltip title="Cancel" arrow>
          <button className="gap-1 flex items-center text-sm transition-all hover:bg-gray-200 border px-2 py-1 rounded-lg">
            <CloseOutlinedIcon fontSize="small" />
          </button>
        </Tooltip>
        <Tooltip title="Save" arrow>
          <button className="gap-1 flex items-center text-sm transition-all bg-green-600 hover:bg-green-500 px-2 py-1 rounded-lg text-white">
            <SaveAltOutlinedIcon fontSize="small" />
          </button>
        </Tooltip>
      </div>
    </li>
  );
};

export default List;
