import React from "react";
import Switch from "@mui/material/Switch";
import { useContext } from "react";
import {
  DashboardContext,
  TDashbaordContext,
} from "../../../Contexts/DashbaordContext";
import { createTheme, Divider, ThemeProvider } from "@mui/material";
import SaveButton from "../../General/Buttons/SaveButton";

const Options = ({ categories }: { categories: Array<string> }) => {
  const { user, darkMode, setDarkMode } = useContext(
    DashboardContext
  ) as TDashbaordContext;

  const saveClickHandler = () => {};

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
    <div className="flex flex-col h-full px-16 py-4 w-full">
      <section className="py-2">
        <p className="uppercase font-bold text-lg" id="general">
          General
        </p>
        <div className=" px-4 py-2 flex items-center justify-between w-full">
          <p>Dark Mode </p>
          <ThemeProvider theme={switchTheme}>
            <Switch
              checked={darkMode}
              onChange={(e) => {
                setDarkMode(e.currentTarget.checked);
              }}
            />
          </ThemeProvider>
        </div>
      </section>
      <Divider />
      <section className="py-2">
        <p className="uppercase font-bold text-lg" id="general">
          User
        </p>
        <div className="flex items-center gap-1 justify-between w-full px-4 py-2">
          <label htmlFor="email" className="">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border-secondary border border-solid grow rounded-lg p-1"
            placeholder={user?.email}
          />
        </div>
        <div className="flex items-center gap-1 justify-between w-full px-4 py-2">
          <label htmlFor="email" className="">
            User Name
          </label>
          <input
            type="text"
            id="email"
            className="border-secondary border border-solid grow rounded-lg p-1"
            placeholder={user?.username}
          />
        </div>
      </section>
      <div className="mt-auto flex justify-end">
        <SaveButton onClick={saveClickHandler} />
      </div>
    </div>
  );
};

export default Options;
