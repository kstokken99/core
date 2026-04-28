import { Link } from "react-router-dom";
import { useTheme } from "@/providers/theme";
import { AppRouter } from "@/providers/router";
import { cn } from "@/utils";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cn("app", theme)}>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <button onClick={toggleTheme}>Toggle theme</button>
      <AppRouter />
    </div>
  );
};
