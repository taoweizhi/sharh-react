import React, {Component} from 'react'
import {Menu, Icon} from 'antd'
import {MenuItem} from "./MenuItem";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: props.mount.current,
    }
  }
  handleClick = (e) => {
    this.setState({current: e.key})
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys = {[this.state.current]}
        mode="inline"
      >
        <MenuItem mount={this.props.mount}/>
      </Menu>
    )
  }
}
