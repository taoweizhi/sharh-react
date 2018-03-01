import React, {Component} from 'react'
import {Menu, Icon} from 'antd'
import {sideBar} from "../config/layout";
import {loadMenu} from "../utils";

const SubMenu = Menu.SubMenu;

class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        defaultSelectedKeys={[this.props.mount.current]}
        style={{ height: '100%', borderRight: 0 }}
        mode="inline"
      >
        {loadMenu(this.props.mount.menu)}
      </Menu>
    )
  }
}

export {SideBar}
