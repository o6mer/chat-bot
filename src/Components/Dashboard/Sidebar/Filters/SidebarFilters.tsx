import React, { useState } from "react";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { Menu, MenuItem, Select } from "@mui/material";
import { useSocket } from "../../../../Hooks/useSocket";
const SidebarFilters = ({
  setFilteredChatList,
  chatListLength,
}: {
  setFilteredChatList: (filter: string) => void;
  chatListLength?: number;
}) => {
  const [filter, setfilter] = useState("Open");
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = (e: any) => {
    setAnchorEl(null);

    const { value } = e.currentTarget.dataset;
    if (!value) return;
    setfilter(value);
    setFilteredChatList(value);
  };

  return (
    <section className="w-full flex justify-between px-4 py-2">
      <div className="flex gap-1 text-sm font-bold items-center cursor-pointer text-black">
        <button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className="flex gap-1 text-sm font-bold items-center capitalize"
        >
          <p className="">{chatListLength}</p>
          <p>{filter}</p>
          <ExpandMoreOutlinedIcon fontSize="small" />
        </button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
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
      <div className="flex gap-1 text-sm font-bold items-center cursor-pointer">
        <p>Newest</p>
        <SortOutlinedIcon fontSize="small" />
      </div>
    </section>
  );
};

export default SidebarFilters;
