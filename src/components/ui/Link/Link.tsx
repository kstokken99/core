import { LinkProps, Link as RouterLink, useLocation } from "react-router-dom";
import { cn } from "@/utils";

import styles from "./Link.module.scss";

interface AppLinkProps extends LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export const Link: React.FC<AppLinkProps> = ({
  to,
  children,
  className,
  ...props
}) => {
  const { pathname } = useLocation();
  const isActive =
    to === "/"
      ? pathname === "/"
      : pathname === to || pathname.startsWith(to + "/");

  return (
    <RouterLink
      to={to}
      className={cn(styles.root, className, { [styles.active]: isActive })}
      {...props}
    >
      {children}
    </RouterLink>
  );
};
