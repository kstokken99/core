import { RouteProps } from "react-router-dom";
import { AppRoutes, routePaths } from "@/constants";
import { AboutPageAsync, MainPageAsync } from "@/pages";

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: routePaths[AppRoutes.MAIN],
    element: <MainPageAsync />,
  },
  [AppRoutes.ABOUT]: {
    path: routePaths[AppRoutes.ABOUT],
    element: <AboutPageAsync />,
  },
};
