import { useTheme } from "@/providers/theme";
import { AppRouter } from "@/providers/router";
import { Navbar, Sidebar } from "@/components";
import { cn } from "@/utils";
import { Suspense } from "react";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cn("app", theme)}>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
