import React from 'react'
import {Menu, Icon} from 'antd'
import {root} from "./config/sitemap";
const _ = require('underscore');
const SubMenu = Menu.SubMenu;

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

const loadMenu = (menu) => {
  return menu.map(
    item => {
      if (item.hasSubMenu)
        return (
          <SubMenu key={item.key} title={item.title}>
            {loadMenu(item.menu)}
          </SubMenu>
        );
      else
        return (
          <Menu.Item
            key={item.key}
          >
            <Icon type={item.icon}/>
            <span>{item.title}</span>
          </Menu.Item>
        )
    }
  )
};

export {urlFor, GET, POST, loadMenu}
