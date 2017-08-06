var webpackConfig = require("../webpack.config.dev");

module.exports = function(config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine"],
    preprocessors: {
      "test/**/*Spec.js": ["webpack"],
      "test/**/*Spec.jsx": ["webpack"]
    },
    files: ["test/**/*Spec.js", "test/**/*Spec.jsx"],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity,
    webpack: webpackConfig
  });
};
