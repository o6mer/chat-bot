import { TChat } from "../../../../../Types/Types";
import InfoSidebarConvoInfo from "./ConvoInfo/InfoSidebarConvoInfo";
import InfoSidebarHeader from "./Header/InfoSidebarHeader";
import Divider from "@mui/material/Divider";

const InfoSidebar = ({ currentChatData }: { currentChatData?: TChat }) => {
  return (
    <div className="outline-[3px] outline outline-gray-200 w-[20%] flex flex-col h-full p-2">
      <InfoSidebarHeader />

      <Divider />

      <InfoSidebarConvoInfo
        id={currentChatData?.id}
        creationTime={currentChatData?.creationTime}
      />
    </div>
  );
};

export default InfoSidebar;
