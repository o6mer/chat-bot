import React from "react";
import SidebarChatListItem from "./SidebarChatListItem";

const SidebarChatsList = () => {
  return (
    <section className="w-full h-full overflow-y-scroll dashboard-scrollbar">
      <ul className="h-full flex flex-col gap-1 ">
        <SidebarChatListItem />
        <SidebarChatListItem />
        <SidebarChatListItem />
        <SidebarChatListItem />
        <SidebarChatListItem />
        <SidebarChatListItem />
        <SidebarChatListItem />
        <SidebarChatListItem />
        <SidebarChatListItem />
        <SidebarChatListItem />
        <SidebarChatListItem />
        <SidebarChatListItem />
        <SidebarChatListItem />
        <SidebarChatListItem />
      </ul>
    </section>
  );
};

export default SidebarChatsList;
