const { defineConfig } = require("@vue/cli-service");
// import baseURL from "./src/axios/baseURL.js";

console.log(baseURL);

module.exports = defineConfig({
  transpileDependencies: true,
  // devServer: {
  //   host: "localhost",
  //   port: 8080,
  //   proxy: {
  //     "/api": {
  //       target:
  //         "https://www.fastmock.site/mock/0b084ebb8f056de8b07b02b4563e2f27/evernote",
  //       changeOrigin: true,
  //       pathRewrite: {
  //         "^/api": "/",
  //       },
  //     },
  //   },
  // },
});
