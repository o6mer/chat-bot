import { Tooltip } from "@mui/material";
import { useContext, useState } from "react";
import { TConversation, TFollowUp } from "../../../../Types/Types";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import {
  DashboardContext,
  TDashbaordContext,
} from "../../../../Contexts/DashbaordContext";

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

  const { darkMode } = useContext(DashboardContext) as TDashbaordContext;

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
    setUpdatedQuestion("");
    setUpdatedResponse("");
    setUpdatedFollowUps([]);
    setEditMode(false);
  };

  const onAddFollowUpClicked = () => {
    setUpdatedFollowUps((prev) => {
      return [...prev, { input: "", conversation: "defualt" }];
    });
  };

  const onFollowUpDeleteClicked = (index: number) => {
    setUpdatedFollowUps((prev) => {
      prev.splice(index, 1);
      return [...prev];
    });
  };

  return (
    <>
      <div
        className={`flex w-min flex-col gap-2 ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        <input
          placeholder="Question..."
          type="text"
          value={updatedQuestion}
          className=" border border-solid border-secondary"
          onChange={(e) => setUpdatedQuestion(e.currentTarget.value)}
        />
        <input
          placeholder="Response..."
          type="text"
          value={updatedResponse}
          className="border border-solid border-secondary"
          onChange={(e) => setUpdatedResponse(e.currentTarget.value)}
        />
        {updatedFollowUps.map((followUp, index) => (
          <div
            className="flex w-full gap-2"
            key={"edit_follow-up" + conversation.id + index}
          >
            <input
              placeholder="Follow-up title..."
              type="text"
              value={followUp.input}
              className="grow border border-solid border-secondary"
              onChange={(e) => {
                const value = e.currentTarget.value;
                setUpdatedFollowUps((prev) => {
                  prev[index].input = value;
                  return [...prev];
                });
              }}
            />
            <select
              className="text-black"
              value={followUp.conversation}
              onChange={(e) => {
                const value = e.currentTarget.value;
                setUpdatedFollowUps((prev) => {
                  prev[index].conversation = value;
                  return [...prev];
                });
              }}
            >
              <option value={"defualt"} disabled>
                Select Conversation
              </option>
              {conversations.map((conversation) => {
                if (!conversation.question) return null;
                return (
                  <option
                    className="text-black"
                    value={conversation.id}
                    key={`option-${conversation.id}`}
                  >
                    {conversation.question}
                  </option>
                );
              })}
            </select>
            <Tooltip title="Delete" arrow>
              <button
                onClick={() => onFollowUpDeleteClicked(index)}
                className={`${
                  darkMode ? "hover:text-third" : "hover:text-gray-700"
                } transition-all`}
              >
                <DeleteOutlineOutlinedIcon fontSize="small" />
              </button>
            </Tooltip>
          </div>
        ))}
        <div className="flex w-full items-center justify-center ">
          <Tooltip title="Add Follow-up" arrow>
            <button
              onClick={onAddFollowUpClicked}
              className={`flex w-max items-center justify-center rounded-lg border border-solid border-secondary p-1 ${
                darkMode ? "hover:bg-darkThird" : "hover:bg-secondary"
              }  transition-all`}
            >
              <AddOutlinedIcon fontSize="small" />
            </button>
          </Tooltip>
        </div>
      </div>
      <div className={`absolute bottom-2 right-2 flex gap-1 transition-all  `}>
        <Tooltip title="Cancel" arrow>
          <button
            className={`flex items-center gap-1 text-sm transition-all ${
              darkMode
                ? "bg-darkPrimary hover:bg-darkSecondary"
                : "bg-primary hover:bg-third"
            }  rounded-lg border px-1 py-1`}
            onClick={onCancelClicked}
          >
            <CloseOutlinedIcon fontSize="small" />
          </button>
        </Tooltip>
        <Tooltip title="Save" arrow>
          <button
            onClick={onSaveClicked}
            className="flex items-center gap-1 rounded-lg bg-green-600 px-1 py-1 text-sm text-white transition-all hover:bg-green-500"
          >
            <SaveAltOutlinedIcon fontSize="small" />
          </button>
        </Tooltip>
      </div>
    </>
  );
};

export default ListItemEditMode;
