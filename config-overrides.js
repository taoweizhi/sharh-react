const { injectBabelPlugin } = require('react-app-rewired');
const rewireless = require('react-app-rewire-less');
const loadTheme = require('./src/theme');

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
  config = rewireless.withLoaderOptions({
    modifyVars: loadTheme(),
  })(config, env);
  return config
};
