import React from "react";
import SidebarChatListItem from "./SidebarChatListItem";

const SidebarChatsList = () => {
  return (
    <section className="w-full h-full">
      <ul className="h-full flex flex-col gap-1">
        <li>
          <SidebarChatListItem />
        </li>
        <li>
          <SidebarChatListItem />
        </li>
        <li>
          <SidebarChatListItem />
        </li>
        <li>
          <SidebarChatListItem />
        </li>
      </ul>
    </section>
  );
};

export default SidebarChatsList;
