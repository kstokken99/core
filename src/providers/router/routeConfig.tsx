import { RouteProps } from 'react-router-dom'
import { AppRoutes, routePaths } from '@/constants'
import { AboutPageAsync, MainPageAsync, NotFoundPage } from '@/pages'

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: routePaths[AppRoutes.MAIN],
    element: <MainPageAsync />,
  },
  [AppRoutes.ABOUT]: {
    path: routePaths[AppRoutes.ABOUT],
    element: <AboutPageAsync />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: routePaths[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
}
