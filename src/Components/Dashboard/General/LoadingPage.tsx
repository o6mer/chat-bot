import React, { useContext } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import {
  DashboardContext,
  TDashbaordContext,
} from "../../../Contexts/DashbaordContext";

const LoadingPage = () => {
  const { darkMode } = useContext(DashboardContext) as TDashbaordContext;
  return (
    <div
      className={`w-full h-full flex items-center justify-center bg-transparent`}
    >
      <CircularProgress sx={{ color: darkMode ? "#fff" : "#aaa" }} />
    </div>
  );
};

export default LoadingPage;
