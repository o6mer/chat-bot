import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TemplateEditor from "./TemplatesEditor/TemplateEditor";
import ConversationEditor from "./ConversationsEditor/ConversationEditor";
import { useContext } from "react";
import {
  DashboardContext,
  TDashbaordContext,
} from "../../../Contexts/DashbaordContext";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const { darkMode } = useContext(DashboardContext) as TDashbaordContext;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabStyling = {
    textTransform: "none",
    fontWeight: "bold",
    fontSize: "1.125rem",
    lineHeight: "1.75rem  ",
    fontFamily: "inherit",
    padding: "1.05rem",
    margin: "0",
    letterSpacing: "inherit",
    backgroundColor: darkMode ? "#1E2022" : "#fff",
    "&.MuiButtonBase-root": {
      color: darkMode ? "#fff" : "#1E2022",
    },
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            backgroundColor: darkMode ? "#1E2022" : "#fff",
            "&.MuiTabs-indicator": {
              backgroundColor: darkMode ? "#fff" : "#1E2022",
            },
          }}
        >
          <Tab label="Conversations Editor" {...a11yProps(0)} sx={tabStyling} />
          <Tab label="Templates Editor" {...a11yProps(1)} sx={tabStyling} />
        </Tabs>
      </div>
      <TabPanel value={value} index={0}>
        <ConversationEditor />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TemplateEditor />
      </TabPanel>
    </div>
  );
}

const TabPanel = ({ children, value, index, ...other }: TabPanelProps) => {
  const { darkMode } = useContext(DashboardContext) as TDashbaordContext;

  return (
    <div
      className={`${
        value === index &&
        `w-full flex grow justify-center ${
          darkMode ? "bg-darkSecondary" : "bg-secondary"
        } `
      }`}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
};
