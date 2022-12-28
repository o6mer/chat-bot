import React, { useState } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Fade, Modal, Tooltip, Backdrop } from "@mui/material";
import { TConversation, TFollowUp } from "../../../../Types/Types";

const ListItem = ({
  conversation,
  deleteConversation,
}: {
  conversation: TConversation;
  deleteConversation: (conversationId?: string) => void;
}) => {
  const [isHover, setIsHover] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const { id, question, response, followUp } = conversation;

  const onEditClicked = () => {
    setOpenEditModal(true);
  };

  const onDeleteClicked = () => {
    deleteConversation(id);
  };
  0;
  return (
    <li
      className="flex flex-col p-8 shadow-lg relative"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div>Question: {question}</div>
      <div>Response: {response}</div>
      <div>
        Follow Up:{" "}
        {followUp.map((followUp: TFollowUp) => (
          <div key={`${followUp.conversation}+${followUp.input}`}>
            {followUp.input}
          </div>
        ))}
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
      <ConversationModal
        conversation={conversation}
        openEditModal={openEditModal}
        setOpenEditModal={setOpenEditModal}
      />
      {/* {editMode && (
        <div
          className={`flex ${
            editMode ? "opacity-100" : "opacity-0"
          } gap-1 absolute bottom-2 right-2 transition-all  `}
        >
          <Tooltip title="Cancel" arrow>
            <button
              className="gap-1 flex items-center text-sm transition-all hover:bg-gray-200 border px-2 py-1 rounded-lg"
              onClick={() => setEditMode(false)}
            >
              <CloseOutlinedIcon fontSize="small" />
            </button>
          </Tooltip>
          <Tooltip title="Save" arrow>
            <button className="gap-1 flex items-center text-sm transition-all bg-green-600 hover:bg-green-500 px-2 py-1 rounded-lg text-white">
              <SaveAltOutlinedIcon fontSize="small" />
            </button>
          </Tooltip>
        </div>
      )} */}
    </li>
  );
};

const ConversationModal = ({
  conversation,
  openEditModal,
  setOpenEditModal,
}: {
  openEditModal: boolean;
  setOpenEditModal: (isOpen: boolean) => void;
  conversation: TConversation;
}) => {
  const [question, setQuestion] = useState(conversation.question);
  const [response, setResponse] = useState(conversation.response);
  const [followUp, setFollowUp] = useState(conversation.followUp);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openEditModal}
      onClose={() => setOpenEditModal(false)}
      closeAfterTransition
    >
      <Fade in={openEditModal}>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white">
          <div className="flex flex-col ">
            <label htmlFor="question">
              Question:
              <input
                type="text"
                id="question"
                value={question}
                onChange={(e) => setQuestion(e.currentTarget.value)}
              />
            </label>
            <label htmlFor="question">
              Response:
              <input
                type="text"
                id="question"
                value={response}
                onChange={(e) => setResponse(e.currentTarget.value)}
              />
            </label>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default ListItem;
