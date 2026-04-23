import webpack from "webpack";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { buildWebpackConfig } from "./config/build";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mode = "development";
const paths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  build: path.resolve(__dirname, "dist"),
  html: path.resolve(__dirname, "public", "index.html"),
};
const isDev = mode === "development";

const config: webpack.Configuration = buildWebpackConfig({
  mode,
  paths,
  isDev,
});

export default config;
