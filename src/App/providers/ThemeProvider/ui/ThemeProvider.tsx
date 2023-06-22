import React, { useMemo, useState, FC } from "react";
import {
  ThemeContext,
  Theme,
  LOCAL_STORAGE_THEME_KEY,
} from "App/providers/ThemeProvider/lib/ThemeContext";

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.Light;

const ThemeProvender: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultContextValueProps = useMemo(() => {
    return {
      theme,
      setTheme: setTheme,
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={defaultContextValueProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvender;
