import ChatKeyboard from "./ChatKeyboard";
import TextMessage from "../../Messages/TextMessage";
import { TMessage } from "../../../Types/Types";
import InputMessage from "../../Messages/InputMessage";
import MultipleChoiceMessage from "../../Messages/MultipleChoiceMessage";
import { useSocketUser } from "../../../Hooks/useSocketUser";
import { useContext } from "react";
import {
  SocketContextUser,
  TSocketContextUser,
} from "../../../Contexts/SocketContextUser";

const ChatField = () => {
  const { socket, messagesList, chooseFollowUp, sendMessage } = useContext(
    SocketContextUser
  ) as TSocketContextUser;

  return (
    <section className="">
      {socket ? (
        <>
          <div className="flex flex-col gap-1 w-full h-80 px-1 py-2 overflow-y-scroll">
            {messagesList?.map((message: TMessage, index: number) => {
              if (message?.type === "text")
                return (
                  <TextMessage
                    {...message}
                    key={index * new Date().getTime()}
                  />
                );
              if (message?.type === "input")
                return (
                  <InputMessage
                    {...message}
                    key={index * new Date().getTime()}
                  />
                );
              if (message?.type === "multiple")
                return (
                  <MultipleChoiceMessage
                    {...message}
                    chooseFollowUp={chooseFollowUp}
                    key={index * new Date().getTime()}
                  />
                );
            })}
          </div>
          <ChatKeyboard sendMessage={sendMessage} />
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </section>
  );
};

export default ChatField;
