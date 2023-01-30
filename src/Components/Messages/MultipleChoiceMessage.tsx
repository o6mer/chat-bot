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
              className="cursor-pointer px-2 py-1 rounded-lg flex justify-start items-center border-secondary border border-solid bg-gray-600 hover:bg-gray-500 transition-all font-bold text-sm text-white"
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
