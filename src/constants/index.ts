export const LOCAL_STORAGE_THEME_KEY = "app-theme";

export enum AppTheme {
  LIGHT = "light",
  DARK = "dark",
}

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}

export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
};
