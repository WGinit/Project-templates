
module.exports = {
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "public",
  indexPath: "index.html",
  pages: {
    index: {
      entry: "src/main.ts",
      template: "public/index.html",
      filename: "index.html",
      title: "导购话术",
      chunks: ["chunk-vendors", "chunk-common", "index"]
    }
  },
  lintOnSave: true,
  productionSourceMap: true,
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {},
    modules: false
  },

  devServer: {
    // 环境配置
    host: "192.168.1.135",
    port: 8080,
    https: false,
    hotOnly: false,
    open: true, //配置自动启动浏览器
    proxy: {
      "/cgi-bin": {
        target: "https://qyapi.weixin.qq.com",
        secure: false,
        changeOrigin: true
      }
    }
  },
  pluginOptions: {
    // 第三方插件配置
    // ...
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  }
};
