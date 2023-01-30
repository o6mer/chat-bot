import { useEffect, useState } from "react";
import Switch from "@mui/material/Switch";
import { useContext } from "react";
import {
  DashboardContext,
  TDashbaordContext,
} from "../../../Contexts/DashbaordContext";
import { createTheme, Divider, ThemeProvider, Tooltip } from "@mui/material";
import SaveButton from "../../General/Buttons/SaveButton";
import EditButton from "../../General/Buttons/EditButton";
import CancelButton from "../../General/Buttons/CancelButton";
import StyledInput from "../../General/StyledInput";
import axios from "axios";
import { useAuth } from "../../../Hooks/useAuth";
import LoadingPage from "../General/LoadingPage";

const Options = ({ selectedCategory }: { selectedCategory: string }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { user, darkMode, setDarkMode } = useContext(
    DashboardContext
  ) as TDashbaordContext;

  const [editEmail, setEditEmail] = useState(user?.email);
  const [editUsername, setEditUsername] = useState(user?.username);
  const [editRole, setEditRole] = useState(user?.role);

  const { updateUser } = useAuth();

  useEffect(() => {
    const element = document.getElementById(selectedCategory);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedCategory]);

  const saveClickHandler = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/user/update`,
        {
          id: user?.id,
          username: editUsername,
          email: editEmail,
          role: editRole,
          // password: editPassword,
        }
      );
      await updateUser(res.data);
      setDefualtValeus();
      setIsLoading(false);
      setIsEditMode(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  const setDefualtValeus = () => {
    setEditEmail(user?.email);
    setEditUsername(user?.username);
    setEditRole(user?.role);
  };

  const cancelClickHandler = () => {
    setDefualtValeus();
    setIsEditMode(false);
  };

  const switchTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : undefined,
      primary: {
        light: "#1E2022",
        main: "#F0F5F9",
        contrastText: "#1E2022",
      },
    },
  });

  return (
    <ThemeProvider theme={switchTheme}>
      <div className="flex flex-col h-fit px-2 lg:px-16 py-4 w-full overflow-y-scroll dashboard-scrollbar">
        <section className="py-2" id="general">
          <p className="uppercase font-bold text-lg" id="general">
            General
          </p>
          <div className=" px-4 py-2 flex items-center justify-between w-full">
            <p>Dark Mode </p>
            <Switch
              checked={darkMode}
              onChange={(e) => {
                setDarkMode(e.currentTarget.checked);
              }}
            />
          </div>
        </section>
        <Divider />
        <section className="py-2" id="user">
          {isLoading ? (
            <LoadingPage />
          ) : (
            <>
              <p className="uppercase font-bold text-lg" id="general">
                User
              </p>
              <div className="flex items-center gap-1 justify-between w-full px-4 py-2">
                <label htmlFor="email" className="">
                  Email
                </label>
                {isEditMode ? (
                  <StyledInput
                    type="text"
                    placeholder={user?.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setEditEmail(e.currentTarget.value)
                    }
                    value={editEmail}
                  />
                ) : (
                  <p>{user?.email}</p>
                )}
              </div>
              <div className="flex items-center gap-1 justify-between w-full px-4 py-2">
                <label htmlFor="email" className="">
                  User Name
                </label>
                {isEditMode ? (
                  <StyledInput
                    type="text"
                    placeholder={user?.username}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setEditUsername(e.currentTarget.value)
                    }
                    value={editUsername}
                  />
                ) : (
                  <p>{user?.username}</p>
                )}
              </div>
              <div className="flex items-center gap-1 justify-between w-full px-4 py-2">
                <label htmlFor="email" className="">
                  Role
                </label>
                {isEditMode ? (
                  <StyledInput
                    type="text"
                    placeholder={user?.role}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setEditRole(e.currentTarget.value)
                    }
                    value={editRole}
                  />
                ) : (
                  <p>{user?.role}</p>
                )}
              </div>
              <>
                {isEditMode ? (
                  <div className="flex justify-between">
                    <CancelButton onClick={cancelClickHandler} />
                    <SaveButton onClick={saveClickHandler} />
                  </div>
                ) : (
                  <div className="flex justify-end">
                    <EditButton
                      onClick={() => {
                        setIsEditMode(true);
                      }}
                    />
                  </div>
                )}
              </>
            </>
          )}
        </section>
        {/* <div className="mt-auto flex justify-end">
        <SaveButton onClick={saveClickHandler} />
      </div> */}
      </div>
    </ThemeProvider>
  );
};

export default Options;
