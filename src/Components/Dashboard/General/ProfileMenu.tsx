import React, { useState, useEffect, useContext } from "react";
import Avatar from "@mui/material/Avatar";
import {
  DashboardContext,
  TDashbaordContext,
} from "../../../Contexts/DashbaordContext";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Popover from "@mui/material/Popover";
import CircleIcon from "@mui/icons-material/Circle";
import { Divider } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useAuth } from "../../../Hooks/useAuth";

const ProfileMenu = ({ open }: { open: boolean }) => {
  const [profileBGColor, setProfileBGColor] = useState("");
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [statusAnchorEl, setStatusAnchorEl] = useState<HTMLElement | null>(
    null
  );
  const [userStatusColor, setUserStatusColor] = useState<string>("");
  const { user, userStatus, setUserStatus } = useContext(
    DashboardContext
  ) as TDashbaordContext;

  const { logout } = useAuth();

  useEffect(() => {
    setProfileBGColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  }, []);

  useEffect(() => {
    if (userStatus === "active") return setUserStatusColor("#76E889");
    if (userStatus === "idle") return setUserStatusColor("#FFEB00");
    if (userStatus === "offline") return setUserStatusColor("#EC2E5F");
  }, [userStatus]);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setStatusAnchorEl(null);
  };

  const handleStatusClick = (e: React.MouseEvent<HTMLElement>) => {
    setStatusAnchorEl(e.currentTarget);
  };

  const handleStatusClose = () => {
    setStatusAnchorEl(null);
  };

  return (
    <>
      <ListItem
        disablePadding
        sx={{ display: "block", marginTop: "auto" }}
        onClick={handleClick}
      >
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,

              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Avatar
              onClick={(e) => {
                console.log(e.currentTarget);
              }}
              sx={{
                mr: open ? 1 : "auto",
                width: "1.8rem",
                height: "1.8rem",
                backgroundColor: profileBGColor,
                text: "white",
                fontSize: 14,
              }}
            >
              {user?.username?.slice(0, 2)}
            </Avatar>
          </ListItemIcon>
          <ListItemText
            primary={"ProfileMenu"}
            sx={{ opacity: open ? 1 : 0 }}
          />
        </ListItemButton>
      </ListItem>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ translate: "1rem -2rem" }}
      >
        <MenuItem onClick={handleClose}>
          <AccountCircleOutlinedIcon />
          Profile
        </MenuItem>
        <MenuItem onClick={handleStatusClick}>
          <CircleIcon sx={{ color: userStatusColor }} fontSize="small" />
          Change Status
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => {
            handleClose();
            logout();
          }}
        >
          <LogoutIcon /> Logout
        </MenuItem>
        <Popover
          id="status-popover"
          disableRestoreFocus
          anchorEl={statusAnchorEl}
          keepMounted
          open={Boolean(statusAnchorEl)}
          onClose={handleStatusClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem
            onClick={() => {
              handleStatusClose();
              setUserStatus("active");
            }}
          >
            <CircleIcon sx={{ color: "#76E889", fontSize: "1rem" }} />
            Active
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleStatusClose();
              setUserStatus("idle");
            }}
          >
            <CircleIcon sx={{ color: "#FFEB00", fontSize: "1rem" }} />
            Idle
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleStatusClose();
              setUserStatus("offline");
            }}
          >
            <CircleIcon sx={{ color: "#EC2E5F", fontSize: "1rem" }} />
            Offline
          </MenuItem>
        </Popover>
      </Menu>
    </>
  );
};

export default ProfileMenu;
