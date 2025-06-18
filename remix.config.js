import path from "path";

export default {
  future: {
    v2_routeConvention: true,
  },
  ignoredRouteFiles: ["**/.*"],
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildPath: "build/index.js",
  serverModuleFormat: "esm",
  devServerBroadcastDelay: 0,
};
