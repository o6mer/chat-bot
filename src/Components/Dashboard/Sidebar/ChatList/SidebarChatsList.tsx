import React, { useEffect, useState } from "react";
import { TChat } from "../../../../Types/Types";
import SidebarChatListItem from "./SidebarChatListItem";

const SidebarChatsList = ({
  chatList,
  sortBy,
}: {
  chatList?: Array<TChat>;
  sortBy: string;
}) => {
  const [sortedList, setSortedList] = useState(chatList);

  useEffect(() => {
    setSortedList(sortList(chatList, sortBy));
  }, [sortBy, chatList]);

  const sortList = (
    list?: Array<TChat>,
    sortBy?: string
  ): Array<TChat> | undefined => {
    if (sortBy === "new")
      return list?.sort((a: TChat, b: TChat): any => {
        if (a.creationTime > b.creationTime) return 1;
        if (a.creationTime < b.creationTime) return -1;
        return 0;
      });
    if (sortBy === "old")
      return list?.sort((a: TChat, b: TChat): any => {
        if (a.creationTime > b.creationTime) return -1;
        if (a.creationTime < b.creationTime) return 1;
        return 0;
      });
    return list;
  };

  return (
    <section className="w-full h-full overflow-y-scroll dashboard-scrollbar">
      <ul className="h-full flex flex-col gap-1 ">
        {sortedList?.map((chat, index) => {
          return <SidebarChatListItem {...chat} key={chat.id || index} />;
        })}
      </ul>
    </section>
  );
};

export default SidebarChatsList;
