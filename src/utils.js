import {root} from "./sitemap";
const _ = require('underscore');

const urlFor = (url, obj) => {
  if (_.isUndefined(url)) return root;
  const params_str = _.chain(obj)
    .pairs()
    .map(x => `?${x[0]}=${x[1]}`)
    .reduce((t, h) => t + h)
    .value();
  return `${root}/${url}${params_str}`
};

const GET = (url) => {
  return {
    method: 'get',
    url: url
  }
};
const POST = (url, data) => {
  return {
    method: 'post',
    url: url,
    data: data
  }
};

export {urlFor, GET, POST}
