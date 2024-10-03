import { createContext } from "react";

const INITIAL_DATA = {
  theme: "dark-theme",
  toggleTheme: () => {},
};

export const ThemeContext = createContext(INITIAL_DATA);
