import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Badge, Button, Icon, Switch, Collapse } from 'antd';
import { Descriptions } from 'antd';
const { Panel } = Collapse;
const ButtonGroup = Button.Group;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;


export default class Areas extends Component {

  state = {
    count: 5,
    show: true,
  }
  increase = () => {
    const count = this.state.count + 1;
    this.setState({ count });
  };

  decline = () => {
    let count = this.state.count - 1;
    if (count < 0) {
      count = 0;
    }
    this.setState({ count });
  };

  onChange = show => {
    this.setState({ show });
  };

  toggleCollapse = () => {
    console.log('toggling')
  };

  render() {
    return (
      <div>
        <Link to="/">
          Home
        </Link>
        <h1>Areas</h1>
        <div>
          <Badge count={this.state.count}>
            <a href="#" className="head-example" />
          </Badge>

          <ButtonGroup>
            <Button onClick={this.decline}>
              <Icon type="minus" />
            </Button>
            <Button onClick={this.increase}>
              <Icon type="plus" />
            </Button>
          </ButtonGroup>
        </div>
       
        <div>
          <Collapse onChange={this.toggleCollapse}>
            <Panel header="EXPRESS DOMESTIC" key="1">
              <Collapse defaultActiveKey="1">
                <Panel header="Area" key="1">
                    <p>Centro</p>
                    <p>15 CP</p>
                    <p>CDMX</p>
                </Panel>
              </Collapse>

              <Collapse defaultActiveKey="1">
                <Panel header="Area B" key="1">

                  <Descriptions title="kanguro envio de 1 a 3 dias" layout="vertical"
                    column={{ xxl: 4, xl: 3, lg: 2, md: 2, sm: 2, xs: 1 }}>
                    <Descriptions.Item label="Estados">Hangzhou, Zhejiang,Hangzhou, Zhejiang,Hangzhou, Zhejiang,Hangzhou, Zhejiang,</Descriptions.Item>
                    <Descriptions.Item label="Codigo postales">434</Descriptions.Item>
                  </Descriptions>

                </Panel>
              </Collapse>


              <div>
                <h2>Tarifas</h2>
              </div>
            </Panel>

          </Collapse>
        </div>

      </div>
    )
  }
}
