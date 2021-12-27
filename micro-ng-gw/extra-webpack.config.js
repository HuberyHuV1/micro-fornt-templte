const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
let {merge} = require('webpack-merge');

module.exports = (angularWebpackConfig, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options);

  const singleSpaConfig = {
    output: {
      // 微应用的包名，这里与主应用中注册的微应用名称一致
      library: "AngularGWApp",
      // 将你的 library 暴露为所有的模块定义下都可运行的方式
      libraryTarget: 'umd',
    }
  };
  const mergedConfig = merge(singleSpaWebpackConfig, singleSpaConfig);
  return mergedConfig;
};
