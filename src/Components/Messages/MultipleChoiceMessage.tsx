import React from "react";
import { TMultipleChoiseMessage, TTextMessage } from "../../Types/Types";
import Message from "./Message";

const MultipleChoiceMessage = ({
  writer,
  time,
  content,
  chooseFollowUp,
}: TMultipleChoiseMessage) => {
  return (
    <Message writer={writer} time={time} type="text">
      <p className="flex w-full">{content?.question}</p>
      <p className="flex w-full">{content?.response}</p>
      <ul>
        {content?.followUp.map((followUp) => (
          <li
            key={followUp.conversation}
            className="cursor-pointer border"
            onClick={() => chooseFollowUp(followUp)}
          >
            {followUp.input}
          </li>
        ))}
      </ul>
    </Message>
  );
};

export default MultipleChoiceMessage;
