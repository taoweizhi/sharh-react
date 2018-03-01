import React, {Component} from 'react'
import {Row, Col} from 'antd'

class FootBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Row>
        {
          this.props.mount.links.map(
            item => {
              return (
                <Col xs={24} md={6}>
                  <h2>
                    <span>
                      {item.title}
                    </span>
                  </h2>
                  {
                    item.content.map(
                      x => {
                        return (
                          <div>
                            <a href={x.href}>{x.title}</a>
                          </div>
                        )
                      }
                    )
                  }
                </Col>
              )
            }
          )
        }
      </Row>
    )
  }
}

export {FootBar}
