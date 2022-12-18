import React, { useState } from "react";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { Menu, MenuItem, Select } from "@mui/material";
import { useSocket } from "../../../../Hooks/useSocket";
const SidebarFilters = ({
  setFilteredChatList,
  sortBy,
  setSortBy,
  chatListLength,
}: {
  setFilteredChatList: (filter: string) => void;
  sortBy: string;
  setSortBy: (sory: string) => void;
  chatListLength?: number;
}) => {
  const [filter, setfilter] = useState("Open");

  const [filterAnchorEl, setFilterAnchorEl] = useState(null);
  const [sortAnchorEl, setSortAnchorEl] = useState(null);

  const filterOpen = Boolean(filterAnchorEl);
  const sortOpen = Boolean(sortAnchorEl);

  const handleClick = (e: any) => {
    if (e.currentTarget.id === "filter")
      return setFilterAnchorEl(e.currentTarget);
    setSortAnchorEl(e.currentTarget);
  };
  const handleClose = (e: any) => {
    setFilterAnchorEl(null);
    setSortAnchorEl(null);

    const { value, type } = e.currentTarget.dataset;
    if (!value) return;

    if (type === "sort") return setSortBy(value);
    setfilter(value);
    setFilteredChatList(value);
  };

  return (
    <section className="w-full flex justify-between px-4 py-2">
      <div className="flex gap-1 text-sm font-bold items-center cursor-pointer text-black">
        <button
          id="filter"
          aria-controls={filterOpen ? "filter-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={filterOpen ? "true" : undefined}
          onClick={handleClick}
          className="flex gap-1 text-sm font-bold items-center capitalize"
        >
          <p className="">{chatListLength}</p>
          <p>{filter}</p>
          <ExpandMoreOutlinedIcon fontSize="small" />
        </button>
        <Menu
          id="filter-menu"
          anchorEl={filterAnchorEl}
          open={filterOpen}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "filter",
          }}
        >
          <MenuItem onClick={handleClose} data-value={"open"}>
            Open
          </MenuItem>
          <MenuItem onClick={handleClose} data-value={"close"}>
            Closed
          </MenuItem>
          <MenuItem onClick={handleClose} data-value={"snooze"}>
            Snoozed
          </MenuItem>
        </Menu>
        {/* <p>Open</p>
        <TuneOutlinedIcon fontSize="small" /> */}
      </div>
      <div className="flex gap-1 text-sm font-bold items-center cursor-pointer text-black">
        <button
          id="sort"
          aria-controls={sortOpen ? "sort-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={sortOpen ? "true" : undefined}
          onClick={handleClick}
          className="flex gap-1 text-sm font-bold items-center capitalize"
        >
          <p>{sortBy}</p>
          <ExpandMoreOutlinedIcon fontSize="small" />
        </button>
        <Menu
          id="sort-menu"
          anchorEl={sortAnchorEl}
          open={sortOpen}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "sort",
          }}
        >
          <MenuItem onClick={handleClose} data-type="sort" data-value={"new"}>
            New
          </MenuItem>
          <MenuItem onClick={handleClose} data-type="sort" data-value={"old"}>
            Old
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            data-type="sort"
            data-value={"waiting"}
          >
            Waiting
          </MenuItem>
        </Menu>
        {/* <p>Open</p>
        <TuneOutlinedIcon fontSize="small" /> */}
      </div>
    </section>
  );
};

export default SidebarFilters;
