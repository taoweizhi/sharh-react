import React, {Component} from 'react'
import {Menu, Icon} from 'antd'
import {MenuItem} from "./MenuItem";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: props.mount.current
    }
  }

  handleClick = (e) => {
    this.setState({
      current: e.key
    });

  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <MenuItem mount={this.props.mount}/>
       </Menu>
    )
  }
}

