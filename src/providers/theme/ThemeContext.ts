import { createContext, Dispatch, SetStateAction } from "react";
import { AppTheme } from "../../constants";

interface ThemeContextProps {
  theme: string;
  setTheme: Dispatch<SetStateAction<AppTheme>>;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: AppTheme.LIGHT,
  setTheme: () => {},
});
