import React, { useState } from "react";
import { TConversation } from "../../../../Types/Types";

const ConversationEditor = ({
  conversations,
}: {
  conversations: TConversation[];
}) => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [followUp, setFollowUp] = useState({ input: "", conversation: "" });

  const submitHandler = () => {};
  return (
    <div>
      <form onSubmit={submitHandler} action="">
        <label htmlFor="question">Question:</label>
        <input
          id="question"
          type="text"
          onChange={(e) => setQuestion(e.currentTarget.value)}
        />
        <label htmlFor="response">Response:</label>
        <input
          id="response"
          type="text"
          onChange={(e) => setResponse(e.currentTarget.value)}
        />
        <label htmlFor="response">Response:</label>

        <input
          type="text"
          onChange={(e) =>
            setFollowUp((prev) => {
              return { ...prev, input: e.currentTarget.value };
            })
          }
        />
        <select name="" id="">
          {conversations?.map((con) => (
            <option value={con.id}>{con.question}</option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default ConversationEditor;
