import React, { useContext } from "react";
import {
  DashboardContext,
  TDashbaordContext,
} from "../../../../../Contexts/DashbaordContext";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const SidebarHeader = ({
  setIsSideBarOpen,
}: {
  setIsSideBarOpen: (b: boolean) => void;
}) => {
  const { user } = useContext(DashboardContext) as TDashbaordContext;
  return (
    <section className="flex items-center justify-between p-3">
      <p className="text-lg  font-bold">Hello, {user?.username}</p>
      <button onClick={() => setIsSideBarOpen(false)}>
        <CloseOutlinedIcon fontSize="medium" />
      </button>
    </section>
  );
};

export default SidebarHeader;
