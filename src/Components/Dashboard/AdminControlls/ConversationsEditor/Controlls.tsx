import React, { FormEvent, useState } from "react";
import { TConversation, TFollowUp } from "../../../../Types/Types";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const Controlls = ({
  createConversation,
  conversations,
}: {
  createConversation: (coversation: TConversation) => void;
  conversations: Array<TConversation>;
}) => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [followUps, setFollowUps] = useState<Array<TFollowUp>>([]);
  const [followUpInput, setFollowUpInput] = useState("");
  const [followUpConversation, setFollowUpConversation] = useState("defualt");

  const onFollowUpAdded = () => {
    if (!followUpInput || !followUpConversation) return;

    if (followUps.find((followUp) => followUp.input === followUpInput))
      return alert("Follow Ups must be unique");

    setFollowUps((prev) => [
      ...prev,
      { input: followUpInput, conversation: followUpConversation },
    ]);

    setFollowUpInput("");
    setFollowUpConversation("defualt");
  };

  const onFollowUpDeleted = (conversation: string) => {
    setFollowUps(
      (prev: Array<TFollowUp>) =>
        (prev = prev.filter((followUp: TFollowUp) => {
          return followUp.conversation !== conversation;
        }))
    );
  };
  const clearForm = () => {
    setQuestion("");
    setResponse("");
    setFollowUps([]);
    setFollowUpInput("");
    setFollowUpConversation("defualt");
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    clearForm();
    const newCovnersation: TConversation = {
      question,
      response,
      followUp: followUps,
    };
    console.log(newCovnersation);
    createConversation(newCovnersation);
  };

  return (
    <form
      onSubmit={submitHandler}
      action=""
      className="flex flex-col justify-center px-2 py-2 gap-2 border rounded-lg"
    >
      <div className="flex justify-between items-center gap-4">
        <label htmlFor="question">
          Question:{" "}
          <input
            placeholder="Question..."
            className="border rounded-lg p-1 focus-visible:outline-gray-300 "
            id="question"
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.currentTarget.value)}
          />
        </label>

        <label htmlFor="response">
          Response:{" "}
          <input
            className="border rounded-lg p-1 focus-visible:outline-gray-300 "
            placeholder="Response..."
            id="response"
            type="text"
            value={response}
            onChange={(e) => setResponse(e.currentTarget.value)}
          />
        </label>

        <label htmlFor="FollowUp" className="flex gap-2 h-min items-center">
          Follow Up:{" "}
          <select
            name=""
            id=""
            value={followUpConversation}
            onChange={(e) => setFollowUpConversation(e.currentTarget.value)}
            className="border p-1 rounded lg focus-visible:outline-gray-300"
          >
            <option value={"defualt"} disabled>
              Select Conversation
            </option>

            {conversations?.map((conversation) => (
              <option key={conversation.id} value={conversation.id}>
                {conversation.question}
              </option>
            ))}
          </select>
          <input
            disabled={followUpConversation === "defualt"}
            className="border rounded-lg p-1 focus-visible:outline-gray-300 "
            placeholder="Title..."
            id="FollowUp"
            type="text"
            value={followUpInput}
            onChange={(e) => setFollowUpInput(e.currentTarget.value)}
          />
          <button
            className="border px-2 py-1 rounded-lg flex items-center hover:bg-gray-200 transition-all font-bold"
            type="button"
            onClick={onFollowUpAdded}
          >
            +
          </button>
          {followUps.length ? (
            <ul className="flex flex-col list-disc">
              {followUps.map((followUp) => {
                return (
                  <li
                    key={`${followUp.conversation}preview`}
                    className="flex justify-between"
                  >
                    <p>{followUp.input}</p>
                    <button
                      type="button"
                      onClick={() => onFollowUpDeleted(followUp.conversation)}
                      className="hover:text-gray-700 transition-all"
                    >
                      <DeleteOutlineOutlinedIcon fontSize="small" />
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="text-md text-gray-400">No Follow Up Questions</p>
          )}
        </label>
      </div>
      <div className="flex justify-end gap-2">
        <button
          type="button"
          className="border px-2 py-1 rounded-lg flex items-center text-white bg-gray-500 hover:bg-gray-400 transition-all font-bold"
          onClick={clearForm}
        >
          <ClearIcon fontSize="small" />
          Clear
        </button>

        <button
          type="submit"
          className="border px-2 py-1 rounded-lg flex items-center hover:bg-gray-200 transition-all font-bold"
        >
          <AddOutlinedIcon fontSize="small" />
          Add
        </button>
      </div>
    </form>
  );
};

export default Controlls;
