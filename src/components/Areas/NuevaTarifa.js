import React from "react";
import { Tabs, Button, Input } from "antd";
import TablaAnidada from "../Areas/TablaAnidada";
import { AppContextConsumer } from "../Context/AppContext";
import Tarifa from "../../model/Tarifa";
import Precios from "../../model/Peso";
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
    //aqui tengo que hacer la instancia de las nuevas tarifas
    const activeKey = `newTab${this.newTabIndex++}`;

    panes.push({
      title: this.state.newName,
      content: "New Tab Pane",
      key: activeKey,
      //data para las nuevas tarifas
      columns: this.props.columns,
      dataSource: this.props.precios
    });
    let indexCobertura = this.props.indice - 1;
    console.log("indexCobertura");
    console.log(indexCobertura);
    this.context.addTarifas(
      indexCobertura,
      new Tarifa(this.state.newName, new Precios(1, 0, 2, 34, 45))
    );

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
    console.log("COBERTURAS: TARIFAS ");
    console.log(this.props.coberturas);
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
              // key={i}
              closable={pane.closable}
            >
              {/* ESTOS DASTOS SON LOS QUE LLENAN LAS TARIFAS, VA A SER HEREDADOS DESDE EL CONTEXTO */}
              <p>Tabla anidada</p>

              <TablaAnidada
                columns={pane.columns}
                data={pane}
                index={{ indexCobertura: this.props.indice, indexTarifa: i }}
                dataSource={this.props.coberturas}
              />
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}
