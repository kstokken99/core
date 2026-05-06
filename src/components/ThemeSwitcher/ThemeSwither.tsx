import { useTheme } from "@/providers/theme";
import { Button } from "@/components/ui";
import { AppTheme } from "@/constants";
import { cn } from "@/utils";

import MoonIcon from "@/assets/icons/moon.svg";
import SunIcon from "@/assets/icons/sun.svg";

interface ThemeSwitherProps {
  className?: string;
}

export const ThemeSwither: React.FC<ThemeSwitherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cn(className)}>
      <Button onClick={toggleTheme}>
        {theme === AppTheme.LIGHT ? <MoonIcon /> : <SunIcon />}
      </Button>
    </div>
  );
};
