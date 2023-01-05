import React, { useState, useEffect, ReactNode, useContext } from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DisplaySettingsOutlinedIcon from "@mui/icons-material/DisplaySettingsOutlined";
import {
  DashboardContext,
  TDashbaordContext,
} from "../../../Contexts/DashbaordContext";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Avatar from "@mui/material/Avatar";

const drawerWidth = 200;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function NavigationBar() {
  const [open, setOpen] = useState(false);
  const [profileBGColor, setProfileBGColor] = useState("");

  const { user, screen, setScreen } = useContext(
    DashboardContext
  ) as TDashbaordContext;

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    setProfileBGColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  }, []);

  return (
    <div className="flex flex-col">
      <Drawer variant="permanent" open={open}>
        <div className={`flex p-4 ${open ? "justify-end" : "justify-center"}`}>
          <button onClick={toggleDrawer} className="text-lg">
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </button>
        </div>
        <Divider />
        <List sx={{ padding: "0" }}>
          <NavigationListItem
            screenIndex={1}
            text="Conversations"
            screen={screen}
            setScreen={setScreen}
            open={open}
            icon={<ForumOutlinedIcon />}
          />
          <NavigationListItem
            screenIndex={2}
            text="Bot and Templates"
            screen={screen}
            setScreen={setScreen}
            open={open}
            icon={<DisplaySettingsOutlinedIcon />}
          />
          <NavigationListItem
            screenIndex={3}
            text="Settings"
            screen={screen}
            setScreen={setScreen}
            open={open}
            icon={<SettingsOutlinedIcon />}
          />
          <NavigationListItem
            screenIndex={-1}
            text="Settings"
            screen={screen}
            setScreen={setScreen}
            open={open}
            icon={
              <Avatar
                sx={{
                  width: "1.8rem",
                  height: "1.8rem",
                  backgroundColor: profileBGColor,
                  text: "white",
                  fontSize: 14,
                }}
              >
                {user?.username?.slice(0, 2)}
              </Avatar>
            }
          />
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}

type TNavigationListItem = {
  screenIndex?: number;
  text?: string;
  screen?: number;
  setScreen: (screen: number) => void;
  open?: boolean;
  icon?: ReactNode;
};

const NavigationListItem = ({
  screenIndex,
  text,
  screen,
  setScreen,
  open,
  icon,
}: TNavigationListItem) => {
  return (
    <ListItem
      key={text}
      disablePadding
      sx={{ display: "block" }}
      onClick={() => {
        screenIndex !== -1 && setScreen(screenIndex || 0);
      }}
    >
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
        }}
        selected={screen === screenIndex}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 1 : "auto",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={() => {}}
        >
          {icon}
        </ListItemIcon>
        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  );
};
