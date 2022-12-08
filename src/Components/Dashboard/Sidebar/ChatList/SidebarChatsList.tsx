import React from "react";
import { TChat } from "../../../../Types/Types";
import SidebarChatListItem from "./SidebarChatListItem";

const SidebarChatsList = ({ chatList }: { chatList?: Array<TChat> }) => {
  return (
    <section className="w-full h-full overflow-y-scroll dashboard-scrollbar">
      <ul className="h-full flex flex-col gap-1 ">
        {chatList?.map((chat, index) => {
          return <SidebarChatListItem {...chat} key={chat._id || index} />;
        })}
      </ul>
    </section>
  );
};

export default SidebarChatsList;
