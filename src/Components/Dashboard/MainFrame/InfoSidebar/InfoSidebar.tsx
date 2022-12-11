import React from "react";
import { TChat } from "../../../../Types/Types";
import SectionBreak from "../../General/SectionBreak";
import InfoSidebarConvoInfo from "./ConvoInfo/InfoSidebarConvoInfo";
import InfoSidebarHeader from "./Header/InfoSidebarHeader";

const InfoSidebar = ({ currentChatData }: { currentChatData?: TChat }) => {
  return (
    <div className="outline-[3px] outline outline-gray-200 w-[20%] flex flex-col h-full p-2">
      <InfoSidebarHeader />

      <SectionBreak />

      <InfoSidebarConvoInfo
        id={currentChatData?.id}
        creationTime={currentChatData?.creationTime}
      />
    </div>
  );
};

export default InfoSidebar;
