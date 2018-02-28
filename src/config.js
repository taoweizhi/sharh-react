const _ = require('underscore');
export { urlFor }

const loadTheme = require('./theme');
const root = 'lgd.shareh.com.cn';

const urlFor = (url, obj) => {
  if (_.isUndefined(url)) return root;
  const params_str = _.chain(obj)
    .pairs()
    .map(x => `?${x[0]}=${x[1]}`)
    .reduce((t, h) => t + h)
    .value();
  return `${root}/${url}${params_str}`
};
