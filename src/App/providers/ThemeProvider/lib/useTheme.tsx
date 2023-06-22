import { useContext } from "react";

import {
  ThemeContext,
  Theme,
  LOCAL_STORAGE_THEME_KEY,
} from "../lib/ThemeContext";

interface UseThemeReturn {
  theme: string;
  toggleTheme: () => void;
}

export function useTheme(): UseThemeReturn {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
}
