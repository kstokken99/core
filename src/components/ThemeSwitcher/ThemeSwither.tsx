import { useTheme } from "@/providers/theme";
import { Button } from "@/components/ui";
import { AppTheme } from "@/constants";
import { cn } from "@/utils";

import MoonIcon from "@/assets/icons/moon.svg";
import SunIcon from "@/assets/icons/sun.svg";

import styles from "./ThemeSwither.module.scss";

interface ThemeSwitherProps {
  className?: string;
}

export const ThemeSwither: React.FC<ThemeSwitherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cn(styles.root, className)}>
      <Button onClick={toggleTheme}>
        {theme === AppTheme.LIGHT ? <MoonIcon /> : <SunIcon />}
      </Button>
    </div>
  );
};
