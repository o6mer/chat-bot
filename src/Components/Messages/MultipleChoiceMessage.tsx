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
    <Message
      writer={writer}
      time={time}
      type="text"
      content={content?.response}
    >
      <div className="flex flex-col py-2">
        <ul className="flex flex-wrap gap-1">
          {content?.followUp.map((followUp) => (
            <li
              key={followUp.conversation}
              className="flex cursor-pointer items-center justify-start rounded-lg border border-solid border-third  px-2 py-1 text-sm  transition-all hover:bg-secondary "
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
