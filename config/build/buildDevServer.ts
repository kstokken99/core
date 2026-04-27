import { BuildOptions } from "./types";
import type { Configuration } from "webpack-dev-server";

export const buildDevServer = (options: BuildOptions): Configuration => ({
  historyApiFallback: true,
  port: options.port,
  open: true,
});
