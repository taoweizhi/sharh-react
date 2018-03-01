import React, {Component} from 'react'
import {Layout} from 'antd'
const {Sider, Header, Footer, Content} = Layout;


class LayoutMain extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Layout>
          <Sider>

          </Sider>
          <Layout>
            <Header>

            </Header>
            <Content>
              {this.props.children}
            </Content>
            <Footer>

            </Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export {Layout}
