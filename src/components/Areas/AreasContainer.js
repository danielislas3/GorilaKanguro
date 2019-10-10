import React from "react";
import { Tabs, Radio } from "antd";
import NuevaTarifa from "./NuevaTarifa";
import { AppContextConsumer } from "../Context/AppContext";
const { TabPane } = Tabs;

export default class AreasContainer extends React.Component {
  static contextType = AppContextConsumer;
  
  constructor(props) {
    super(props);
    this.state = {
      mode: "left",
      name: "nombre"
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
        <Tabs defaultActiveKey="1" tabPosition={mode}>
          {/* CADA TAB PANE ES UNA "COBERTURA" QUE TIENE DENTRO TARIFAS KANGURO */}
          {/* <TabPane tab='A' key="0" closable='false'  > 
            <div>
              <NuevaTarifa name='Kanguro 1' 
              // data={[
              //       {
              //         key: '0',
              //         desde: '0',
              //         hasta: '1',
              //         sub: '99',
              //         preKgExtra:'0',
                      
              //       },
              //       {
              //         key: '1',
              //         desde: '1.01',
              //         hasta: '2',
              //         sub: '95',
              //         preKgExtra:'1',
              //       }]}
                />
            </div>

           </TabPane> */}

          {this.context.state.coberturas.map((area, i) => (
            
            <TabPane tab={area.name} key={i} closable="false">
              <NuevaTarifa
                name="Kanguro 1"
                coberturas={area.tarifas}
                columns={[
                  {
                    title: "Desde",
                    dataIndex: "desde",
                    editable: true
                  },
                  {
                    title: "Hasta",
                    dataIndex: "hasta",
                    editable: true
                  },
                  {
                    title: "Subtotal Normal",
                    dataIndex: "sub",
                    editable: true
                  },
                  {
                    title: "Precio/Kg extra Normal",
                    dataIndex: "preKgExtra",
                    editable: true
                  },
                  {
                    title: "Subtotal1",
                    dataIndex: "sub",
                    editable: true
                  },
                  {
                    title: "Precio/Kg extra1",
                    dataIndex: "preKgExtra",
                    editable: true
                  }
                ]}
              />
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}
