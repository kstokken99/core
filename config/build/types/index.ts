export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
}

export interface BuildOptions {
  mode: "development" | "production";
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}
