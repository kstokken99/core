import { useMemo, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { AppTheme, LOCAL_STORAGE_THEME_KEY } from "../../constants";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const initialTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as AppTheme) ||
    AppTheme.LIGHT;

  const [theme, setTheme] = useState<AppTheme>(initialTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
