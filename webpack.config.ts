import webpack from "webpack";
import path from "path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
  };

  const mode = env.mode || "production";
  const PORT = env.port || 3000;
  const isDevelopment = mode === "development";

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDevelopment,
    port: PORT,
  });
  return config;
};
