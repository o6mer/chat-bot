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
      <div className="flex flex-col">
        <p className="flex w-full">{content?.response}</p>
        <ul className="flex flex-wrap gap-1">
          {content?.followUp.map((followUp) => (
            <li
              key={followUp.conversation}
              className="flex cursor-pointer items-center justify-start rounded-lg border border-solid border-secondary bg-gray-600 px-2 py-1 text-sm font-bold text-white transition-all hover:bg-gray-500"
              onClick={() => chooseFollowUp && chooseFollowUp(followUp)}
            >
              {followUp.input}
            </li>
          ))}
        </ul>
      </div>
    </Message>
  );
};

export default MultipleChoiceMessage;
