import webpack from "webpack";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { buildWebpackConfig } from "./config/build";
import { BuildEnv, BuildPaths } from "./config/build/types";

export default (env: BuildEnv) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "dist"),
    html: path.resolve(__dirname, "public", "index.html"),
  };

  const mode = env.mode || "development";
  const isDev = mode === "development";
  const port = env.port || 3000;

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
  });

  return config;
};
