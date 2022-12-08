import React from "react";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
const SidebarFilters = () => {
  return (
    <section className="w-full flex justify-between p-2">
      <div className="flex gap-1 text-sm font-bold items-center cursor-pointer">
        <p>Open</p>
        <TuneOutlinedIcon fontSize="small" />
      </div>
      <div className="flex gap-1 text-sm font-bold items-center cursor-pointer">
        <p>Newest</p>
        <SortOutlinedIcon fontSize="small" />
      </div>
    </section>
  );
};

export default SidebarFilters;
