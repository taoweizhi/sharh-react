import React, {Component} from 'react'
import {Menu, Icon} from 'antd'

const SubMenu = Menu.SubMenu;

class MenuItem extends Component {
  constructor(props) {
    super(props);
  }

  reder() {
    return (
      this.props.mount.menu.map(
        item => {
          if (item.hasSubMenu)
            return (
              <SubMenu
                key={item.key}
                title={
                  <span><Icon type={item.icon}/>{item.title}</span>
                }
              >
                <MenuItem mount={item.menu}/>
              </SubMenu>
            );
          else
            return (
              <Menu.Item
                key={item.key}
              >
                <Icon type={item.icon}/>
                <a href={item.href}>{item.title}</a>
              </Menu.Item>
            )
        }
      )
    )
  }
}

export {MenuItem}
