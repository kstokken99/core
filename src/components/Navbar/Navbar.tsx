import { ThemeSwither } from "@/components";
import { Link } from "@/components/ui";
import { AppRoutes, routePaths } from "@/constants";
import { cn } from "@/utils";

import styles from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav className={cn(styles.root, className)}>
      <div className={styles.links}>
        <Link to={routePaths.main}>{AppRoutes.MAIN}</Link>
        <Link to={routePaths.about}>{AppRoutes.ABOUT}</Link>
      </div>
      <ThemeSwither />
    </nav>
  );
};
