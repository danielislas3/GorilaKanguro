import React from 'react'
import { Tabs, Button, Input} from 'antd';
import TablaAnidada from '../Areas/TablaAnidada'

const { TabPane } = Tabs;

export default class  NuevaTarifa extends React.Component {

  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { title: this.props.name, content: 'Content of Tab Pane 1', key: '1'},
      { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' },
    ];
    this.state = {
     
      activeKey: panes[0].key,
      panes,
      newName:null
    };
  }
  handleInput = (e) => {
    this.setState({newName: e.target.value})
  }
  onChange = activeKey => {
    this.setState({ activeKey });
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };


  add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: this.state.newName, content: 'New Tab Pane', key: activeKey});
    this.setState({ panes, activeKey,newName:'' });
  };

  remove = targetKey => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  };

  render() {
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button onClick={this.add}>Crear tarifa</Button>
          <Input placeholder="Nombre de tarifa" style={{marginLeft:20,width:200}} onChange={this.handleInput}
           value={this.state.newName}/>
        </div>
        <Tabs
          
          hideAdd={false}
          onChange={this.onChange}
          activeKey={this.state.activeKey}
          type="editable-card"
          onEdit={this.onEdit}
        >
          
          {this.state.panes.map(pane => (
            <TabPane tab={pane.title} key={pane.key}>
                <TablaAnidada  />
              {/* {pane.content} */}
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}
