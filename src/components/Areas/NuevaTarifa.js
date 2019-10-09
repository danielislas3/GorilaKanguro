import React from "react";
import { Tabs, Button, Input } from "antd";
import TablaAnidada from "../Areas/TablaAnidada";
import { AppContextConsumer } from "../Context/AppContext";

const { TabPane } = Tabs;

export default class NuevaTarifa extends React.Component {
  static contextType = AppContextConsumer;

  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      //cada panel es una "Tarifa canguro que pertenecen a una covertura"

      {
        title: this.props.name,
        content: "Content of Tab Pane 1",
        key: "1",
        closable: false,
        columns: this.props.columns,
        dataSource: this.props.precios
      }
    ];
    this.state = {
      activeKey: panes[0].key,
      panes,
      newName: "",
      context: ""
    };
  }
  handleInput = e => {
    this.setState({ newName: e.target.value });
  };

  onChange = activeKey => {
    this.setState({ activeKey });
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({
      title: this.state.newName,
      content: "New Tab Pane",
      key: activeKey,
      //data para las nuevas tarifas
      columns: this.props.columns,
      dataSource: this.props.precios
    });
    this.setState({ panes, activeKey, newName: "" });
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
          <Button
            icon="file-add"
            type="primary"
            disabled={this.state.newName.length > 0 ? false : true}
            onClick={this.add}
          >
            Crear tarifa
          </Button>

          <Input
            placeholder="Nombre de tarifa canguro"
            style={{ marginLeft: 20, width: 200 }}
            onChange={this.handleInput}
            value={this.state.newName}
          />
        </div>
        
        <Tabs
          hideAdd={true}
          onChange={this.onChange}
          activeKey={this.state.activeKey}
          type="editable-card"
          onEdit={this.onEdit}
        >
          {this.state.panes.map((pane, i) => (
            <TabPane
              tab={pane.title}
              key={pane.key}
              key={i}
              closable={pane.closable}
            >
              {/* ESTOS DASTOS SON LOS QUE LLENAN LAS TARIFAS, VA A SER HEREDADOS DESDE EL CONTEXTO */}
              <p>Tabla anidada</p>

              <TablaAnidada
                columns={pane.columns}
                data="data"
                //estos dataosurce son los que se heredan en la tabla anidada para cada tarifa. hay que migrarlos al contexto.
                dataSource={this.props.coberturas}
              />
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}
