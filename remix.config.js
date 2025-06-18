/** @type {import('@remix-run/dev').AppConfig} */
const netlify = require("@remix-run/netlify");

module.exports = {
  serverBuildTarget: "netlify",
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  ignoredRouteFiles: ["**/.*"],
  server: undefined, // use default server entry point
  // adapter:
  adapter: netlify(),
};
