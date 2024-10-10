import { createContext, ReactElement, useReducer } from "react";

const INITIAL_DATA = {
  theme: "dark-theme",
  toggleTheme: () => {},
};

export const ThemeContext = createContext(INITIAL_DATA);

interface ThemeState {
  value: string;
}

type CounterAction = { type: "TOGGLE_THEME" };

function themeReducer(state: ThemeState, action: CounterAction): ThemeState {
  if (action.type === "TOGGLE_THEME") {
    if (state.value === "dark-theme") {
      return {
        ...state,
        value: "light-theme",
      };
    }
    return {
      ...state,
      value: "dark-theme",
    };
  }

  return state;
}

export default function ThemeContextProvider({
  children,
}: {
  children: ReactElement;
}) {
  const [theme, themeDispatch] = useReducer(themeReducer, {
    value: "dark-theme",
  });

  function toggleTheme() {
    themeDispatch({
      type: "TOGGLE_THEME",
    });
  }

  const ctxValue = {
    theme: theme.value,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={ctxValue}>{children}</ThemeContext.Provider>
  );
}
