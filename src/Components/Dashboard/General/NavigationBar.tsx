import { useState, ReactNode, useContext } from "react";
import { styled, Theme, CSSObject, SxProps } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
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
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ProfileMenu from "./ProfileMenu";

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

  const { screen, setScreen, darkMode } = useContext(
    DashboardContext
  ) as TDashbaordContext;

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col">
      <Drawer variant="permanent" open={open}>
        <div
          className={`flex p-4 ${open ? "justify-end" : "justify-center"} ${
            darkMode ? "bg-darkPrimary" : "bg-primary"
          }`}
        >
          <button onClick={toggleDrawer} className="text-lg">
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </button>
        </div>
        <Divider />
        <List
          sx={{
            padding: "0",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <NavigationListItem
            screenIndex={1}
            text="Conversations"
            selected={screen === 1}
            setScreen={setScreen}
            open={open}
            icon={<ForumOutlinedIcon />}
          />
          <NavigationListItem
            screenIndex={2}
            text="Bot and Templates"
            selected={screen === 2}
            setScreen={setScreen}
            open={open}
            icon={<DisplaySettingsOutlinedIcon />}
          />
          <NavigationListItem
            screenIndex={3}
            text="Settings"
            selected={screen === 3}
            setScreen={setScreen}
            open={open}
            icon={<SettingsOutlinedIcon />}
          />
          <ProfileMenu open={open} />
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}

type TNavigationListItem = {
  screenIndex: number;
  text?: string;
  setScreen: (screen: number) => void;
  open?: boolean;
  icon?: ReactNode;
  sx?: SxProps<Theme> | undefined;
  selected: boolean;
};

const NavigationListItem = ({
  screenIndex,
  text,
  setScreen,
  open,
  icon,
  sx,
  selected,
}: TNavigationListItem) => {
  return (
    <ListItem
      key={text}
      disablePadding
      sx={{ ...sx, display: "block" }}
      onClick={(e) => {
        screenIndex !== -1 && setScreen(screenIndex);
      }}
    >
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
        }}
        selected={selected}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 1 : "auto",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  );
};
