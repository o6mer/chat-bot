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
      className={`w-full h-full flex items-center justify-center ${
        darkMode ? "bg-darkPrimary" : "bg-primary"
      }`}
    >
      <CircularProgress sx={{ color: darkMode ? "#fff" : "#121212" }} />
    </div>
  );
};

export default LoadingPage;
