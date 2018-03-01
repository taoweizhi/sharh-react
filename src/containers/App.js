import React, {Component} from 'react';
import './App.css';

import {Menu} from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN';
import {LayoutMain} from "../layouts/LayoutMain";
import {sideBar, footBar, navBar} from "../config/layout";


class App extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = (e) => {
    console.log('click ', e);
  };

  render() {
    return (
      <LayoutMain
        sideBar={sideBar}
        footBar={footBar}
      >
      </LayoutMain>
    )
  }
}

export default App;
