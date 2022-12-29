import { useContext, useState } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import { Fade, Modal, Tooltip } from "@mui/material";
import { TConversation, TFollowUp } from "../../../../Types/Types";
import {
  SocketContext,
  TSocketContext,
} from "../../../../Contexts/SocketContext";

const ListItem = ({
  conversation,
  conversations,
  getConversationById,
}: {
  conversation: TConversation;
  conversations: Array<TConversation>;
  getConversationById: (conversationId: string) => TConversation | undefined;
}) => {
  const [isHover, setIsHover] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [followUps, setFollowUps] = useState<Array<TConversation>>([]);

  const { updateConversation, deleteConversation } = useContext(
    SocketContext
  ) as TSocketContext;

  const { id, question, response, followUp } = conversation;

  const onEditClicked = () => {
    setEditMode(true);
  };

  const onDeleteClicked = () => {
    deleteConversation(id);
  };

  const showFollowUpConversation = (conversationId: string) => {
    const followUpConversation = getConversationById(conversationId);
    console.log(followUpConversation, conversationId);

    if (!followUpConversation) return;
    setFollowUps((prev: Array<TConversation>) => [
      ...prev,
      followUpConversation,
    ]);
  };

  return (
    <li
      className="flex flex-col p-8 shadow-lg relative"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
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
            <p>{question}</p>
            <p>{response}</p>
            <div>
              {followUp.map((followUp) => (
                <button
                  key={`button-${followUp.conversation}`}
                  onClick={() =>
                    showFollowUpConversation(followUp.conversation)
                  }
                >
                  {followUp.input}
                </button>
              ))}
            </div>
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

const ListItemEditMode = ({
  conversation,
  conversations,
  setEditMode,
  updateConversation,
}: {
  conversation: TConversation;
  conversations: Array<TConversation>;
  setEditMode: (mode: boolean) => void;
  updateConversation: (conversation: TConversation) => void;
}) => {
  const [updatedQuestion, setUpdatedQuestion] = useState(conversation.question);
  const [updatedResponse, setUpdatedResponse] = useState(conversation.response);
  const [updatedFollowUps, setUpdatedFollowUps] = useState<Array<TFollowUp>>(
    conversation.followUp
  );

  const onSaveClicked = () => {
    const updatedConversation: TConversation = {
      id: conversation.id,
      question: updatedQuestion,
      response: updatedResponse,
      followUp: updatedFollowUps,
    };
    updateConversation(updatedConversation);
    setEditMode(false);
  };

  const onCancelClicked = () => {
    setEditMode(false);
  };

  return (
    <>
      <div className="flex flex-col w-min">
        <input
          type="text"
          value={updatedQuestion}
          className="border "
          onChange={(e) => setUpdatedQuestion(e.currentTarget.value)}
        />
        <input
          type="text"
          value={updatedResponse}
          className="border"
          onChange={(e) => setUpdatedResponse(e.currentTarget.value)}
        />
        {updatedFollowUps.map((followUp, index) => (
          <label
            className="w-full flex"
            key={`followUp-${followUp.conversation}`}
          >
            <input
              type="text"
              value={followUp.input}
              className="border w-full"
              onChange={(e) => {
                const value = e.currentTarget.value;
                setUpdatedFollowUps((prev) => {
                  prev[index].input = value;
                  return [...prev];
                });
              }}
            />
            <select
              name=""
              id=""
              value={followUp.conversation}
              onChange={(e) =>
                setUpdatedFollowUps((prev) => {
                  prev[index].conversation = e.currentTarget.value;
                  return [...prev];
                })
              }
            >
              {conversations.map((conversation) => (
                <option
                  value={conversation.id}
                  key={`option-${conversation.id}`}
                >
                  {conversation.question}
                </option>
              ))}
            </select>
          </label>
        ))}
      </div>
      <div className={`flex gap-1 absolute bottom-2 right-2 transition-all  `}>
        <Tooltip title="Cancel" arrow>
          <button
            className="gap-1 flex items-center text-sm transition-all bg-white hover:bg-gray-200 border px-1 py-1 rounded-lg"
            onClick={onCancelClicked}
          >
            <CloseOutlinedIcon fontSize="small" />
          </button>
        </Tooltip>
        <Tooltip title="Save" arrow>
          <button
            onClick={onSaveClicked}
            className="gap-1 flex items-center text-sm transition-all bg-green-600 hover:bg-green-500 px-1 py-1 rounded-lg text-white"
          >
            <SaveAltOutlinedIcon fontSize="small" />
          </button>
        </Tooltip>
      </div>
    </>
  );
};

{
  /* <ConversationModal
  conversation={conversation}
  openEditModal={openEditModal}
  setOpenEditModal={setOpenEditModal}
/>; */
}

// const ConversationModal = ({
//   conversation,
//   openEditModal,
//   setOpenEditModal,
// }: {
//   openEditModal: boolean;
//   setOpenEditModal: (isOpen: boolean) => void;
//   conversation: TConversation;
// }) => {
//   const [question, setQuestion] = useState(conversation.question);
//   const [response, setResponse] = useState(conversation.response);
//   const [followUp, setFollowUp] = useState(conversation.followUp);

//   return (
//     <Modal
//       aria-labelledby="transition-modal-title"
//       aria-describedby="transition-modal-description"
//       open={openEditModal}
//       onClose={() => setOpenEditModal(false)}
//       closeAfterTransition
//     >
//       <Fade in={openEditModal}>
//         <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white">
//           <div className="flex flex-col ">
//             <label htmlFor="question">
//               Question:
//               <input
//                 type="text"
//                 id="question"
//                 value={question}
//                 onChange={(e) => setQuestion(e.currentTarget.value)}
//               />
//             </label>
//             <label htmlFor="question">
//               Response:
//               <input
//                 type="text"
//                 id="question"
//                 value={response}
//                 onChange={(e) => setResponse(e.currentTarget.value)}
//               />
//             </label>
//           </div>
//         </div>
//       </Fade>
//     </Modal>
//   );
// };

export default ListItem;
