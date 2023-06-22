export type BuildMode = "development" | "production";

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  port?: number;
  isDevelopment: boolean;
}

export interface BuildEnv {
  mode: BuildMode;
  port?: number;
}
