import { useTheme } from "@/providers/theme";
import { AppRouter } from "@/providers/router";
import { Navbar, Sidebar } from "@/components";
import { cn } from "@/utils";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cn("app", theme)}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};
