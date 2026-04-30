import { Link } from "react-router-dom";
import { useTheme } from "@/providers/theme";
import { AppRoutes, routePaths } from "@/constants";
import { cn } from "@/utils";

import styles from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { toggleTheme } = useTheme();
  return (
    <nav className={cn(styles.root, className)}>
      <div className={cn(styles.links)}>
        <Link to={routePaths.main}>{AppRoutes.MAIN}</Link>
        <Link to={routePaths.about}>{AppRoutes.ABOUT}</Link>
      </div>
      <button onClick={toggleTheme}>Toggle theme</button>
    </nav>
  );
};
