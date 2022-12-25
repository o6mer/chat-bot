import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TemplateEditor from "./TemplatesEditor/TemplateEditor";
import ConversationEditor from "./ConversationsEditor/ConversationEditor";

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
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabStyling = {
    textTransform: "none",
    fontWeight: "bold",
    fontSize: "1.125rem",
    lineHeight: "1.75rem  ",
    fontFamily: "inherit",
    padding: "1.25rem",
    margin: "0",
    letterSpacing: "inherit",
  };

  return (
    <div className="w-full h-full flex flex-col">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Bot Editor" {...a11yProps(0)} sx={tabStyling} />
          <Tab label="Templates Editor" {...a11yProps(1)} sx={tabStyling} />
        </Tabs>
      </Box>
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
  return (
    <div
      className={`${
        value === index && "w-full flex grow justify-center px-32 py-20   "
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
