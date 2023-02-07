import ChatKeyboard from "./ChatKeyboard";
import TextMessage from "../../Messages/TextMessage";
import { TMessage } from "../../../Types/Types";
import InputMessage from "../../Messages/InputMessage";
import MultipleChoiceMessage from "../../Messages/MultipleChoiceMessage";
import { useContext, useEffect, useRef } from "react";
import {
  SocketContextUser,
  TSocketContextUser,
} from "../../../Contexts/SocketContextUser";
import LoadingPage from "../../Dashboard/General/LoadingPage";

const ChatField = () => {
  const { socket, messagesList, chooseFollowUp, sendMessage } = useContext(
    SocketContextUser
  ) as TSocketContextUser;

  const bottomRef: any = useRef(null);

  useEffect(() => {
    if (!bottomRef.current) return;
    bottomRef.current.scrollIntoView();
  }, [messagesList]);

  return (
    <section className="">
      {messagesList.length ? (
        <>
          <div className="dashboard-scrollbar flex h-80 w-full flex-col gap-1 overflow-y-scroll p-2">
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
            <div ref={bottomRef}></div>
          </div>
          <ChatKeyboard sendMessage={sendMessage} />
        </>
      ) : (
        <LoadingPage />
      )}
    </section>
  );
};

export default ChatField;
