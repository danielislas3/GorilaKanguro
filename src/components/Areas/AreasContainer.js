import React from 'react'
import { Tabs, Radio } from 'antd';
import NuevaTarifa from './NuevaTarifa'
const { TabPane } = Tabs;

export default class AreasContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'ltopeft',
    };
  }

  handleModeChange = e => {
    const mode = e.target.value;
    this.setState({ mode });
  };

  render() {
    const { mode } = this.state;
    return (
      <div>
        {/* <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>
          <Radio.Button value="top">Horizontal</Radio.Button>
          <Radio.Button value="left">Vertical</Radio.Button>
        </Radio.Group> */}
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 220 }}>
          {/* {[...Array(30).keys()].map(i => (
            <TabPane tab={`Tab-${i}`} key={i}>
              Content of tab {i}
            </TabPane>
          ))} */}
           <TabPane tab={'Tarifa A'} key="0" > 
            <NuevaTarifa name="tarifa kanguro A" data={[
                  {
                    key: '0',
                    desde: '0',
                    hasta: '1',
                    sub: '99',
                    preKgExtra:'0',
                  },
                  {
                    key: '1',
                    desde: '1.01',
                    hasta: '2',
                    sub: '95',
                    preKgExtra:'0',
                  },
             ] }/>
           </TabPane>
           <TabPane tab={'Tarifa B'} key='1'> 
            <NuevaTarifa name="tarifa kanguro A" data={[
                  {
                    key: '0',
                    desde: '0',
                    hasta: '1',
                    sub: '99',
                    preKgExtra:'0',
                  },
                  {
                    key: '1',
                    desde: '1.01',
                    hasta: '2',
                    sub: '95',
                    preKgExtra:'0',
                  },
             ] }/>
           </TabPane>
        </Tabs>
      </div>
    );
  }
}

