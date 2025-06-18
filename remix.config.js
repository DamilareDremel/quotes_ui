export default {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  serverBuildPath: "netlify/functions/server.js",  // ✅ Must be .js not .zip
  publicPath: "/build/",
  serverModuleFormat: "esm"
};
