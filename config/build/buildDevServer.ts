import { BuildOptions } from "./types";
import type { Configuration } from "webpack-dev-server";

export const buildDevServer = (options: BuildOptions): Configuration => ({
  port: options.port,
  open: true,
});
