import React, {Component} from 'react'
import {Layout, Icon, Row, Col} from 'antd'
import {SideBar} from "../components/SideBar";
import {FootBar} from "../components/FootBar";

const {Sider, Header, Footer, Content} = Layout;


class LayoutMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo"/>
          <SideBar mount={this.props.sideBar}/>
        </Sider>
        <Layout>
          <Header style={{background: '#fff', padding: 0}}>
            <Row>
              <Col>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
              </Col>
            </Row>
          </Header>
          <Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280}}>
            {this.props.children}
          </Content>
          <Footer style={{textAlign: 'center'}}>
            <FootBar mount={this.props.footBar}/>
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export {LayoutMain}
