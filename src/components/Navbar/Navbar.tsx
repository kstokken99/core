import { useTheme } from "@/providers/theme";
import { Link, Button } from "@/components/ui";
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
      <Button onClick={toggleTheme}>Toggle theme</Button>
    </nav>
  );
};
