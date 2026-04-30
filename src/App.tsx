import { useTheme } from "@/providers/theme";
import { AppRouter } from "@/providers/router";
import { Navbar } from "@/components";
import { cn } from "@/utils";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cn("app", theme)}>
      <Navbar />
      <AppRouter />
    </div>
  );
};
