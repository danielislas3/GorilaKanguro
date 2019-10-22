import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Collapse, Input } from "antd";
import { Descriptions, Breadcrumb } from "antd";
//import NuevaTarifa from './Areas/NuevaTarifa'
import AreasContainer from "./Areas/AreasContainer";
//import Tabla from './Areas/Tabla';
import { AppContextConsumer } from "./Context/AppContext";
import UploadFile from "./UploadFile";
//import { importDefaultSpecifier } from '@babel/types';
//import Consumer from './Context/Context'

const { Panel } = Collapse;
const ButtonGroup = Button.Group;

export default class Areas extends Component {
  state = {
    rutaCode: [],
    newCobertura: "",
    data: [
      {
        id: 999,
        name: "A",
        count: 421,
        states: [
          "CDMX",
          "Aguascalientes",
          "Baja",
          "California",
          "Mexicali",
          "Baja",
          "California",
          "Sur",
          "La Paz",
          "Campeche",
          "San",
          "Francisco",
          "de",
          "Campeche",
          "Chihuahua",
          "Chihuahua",
          "Tuxtla",
          "Gutiérrez",
          "Coahuila",
          "Saltillo",
          "Colima",
          "Colima",
          "Francisco",
          "de",
          "Campeche",
          "Chihuahua",
          "Chihuahua",
          "Tuxtla",
          "Gutiérrez",
          "Coahuila",
          "Saltillo",
          "Colima",
          "Colima"
        ]
      },
      {
        id: 890,
        name: "B",
        count: 321,
        states: [
          "Francisco",
          "de",
          "Campeche",
          "Chihuahua",
          "Chihuahua",
          "Tuxtla",
          "Gutiérrez",
          "Coahuila",
          "Saltillo",
          "Colima",
          "Colima"
        ]
      },
      {
        id: 234,
        name: "C",
        count: 543,
        states: [
          "CDMX",
          "Aguascalientes",
          "Baja",
          "California",
          "Mexicali",
          "Baja",
          "California",
          "Sur",
          "La Paz",
          "Campeche",
          "Chihuahua",
          "Tuxtla",
          "Gutiérrez",
          "Coahuila",
          "Saltillo",
          "Colima",
          "Colima"
        ]
      }
    ],
    currentService: "EXPRESS DOMESTIC",
    count: 5,
    show: true
  };
  handleInput = e => {
    this.setState({ newCobertura: e.target.value });
  };
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
    console.log("toggling");
  };

  conInputChange = (e, field, ruta, i) => {
    let rutasCodes = [];
    rutasCodes[i] = e.target.value;
    this.setState((prev, i) => ({ rutaCode: [...rutasCodes] }));

    //ruta.handleChange(e)
    ruta[field] = e.target.value;
    console.log(e.target.value, field, ruta);
  };


  render() {
    return (
      <>
        {/* Seccion Areas */}
        <section>
          <h1>Areas</h1>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">Proveedores</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/dhl">DHL</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>EXPRESS WORLDWIDE</Breadcrumb.Item>
          </Breadcrumb>

          {this.state.data.map((area, i) => (
            <Collapse defaultActiveKey="0" key={i}>
              <Panel header={area.name} key={i}>
                <Descriptions
                  title="kanguro envio de 1 a 3 dias"
                  layout="vertical"
                  column={{ xxl: 4, xl: 3, lg: 2, md: 2, sm: 2, xs: 1 }}
                >
                  <Descriptions.Item label="Estados">
                    Hangzhou, Zhejiang,Hangzhou, Zhejiang,Hangzhou,
                    Zhejiang,Hangzhou, Zhejiang,
                  </Descriptions.Item>
                  <Descriptions.Item label="Codigo postales">
                    434
                  </Descriptions.Item>
                </Descriptions>
              </Panel>
            </Collapse>
          ))}
        </section>
        {/* Seccion Tarifas (de Areas)*/}

        <div>
          <AppContextConsumer>
            {context => {
              //console.log(context)
              return (
                <>
                              
        
                  <br />

                  <ul>
                    {context.state.rutas.map((ruta, i) => (
                      <input
                        type="text"
                        value={this.state.rutaCode[i]}
                        onChange={e => this.conInputChange(e, "code", ruta, i)}
                      ></input>
                    ))}
                  </ul>
                  <br />
                  <h2>Tarifas</h2>
                <UploadFile/>
                  <br/>
                  <Button
                    icon="file-add"
                    type="primary"
                    onClick={() => {
                      context.addCobertura(this.state.newCobertura);
                    }}
                    disabled={this.state.newCobertura.length > 0 ? false : true}
                  >
                    Crear Cobertura
                  </Button>

                  <Input
                    placeholder="Nombre Cobertura"
                    style={{ marginLeft: 20, width: 200 }}
                    onChange={this.handleInput}
                    value={this.state.newCobertura}
                  />

                  {/* <TablaPesoTarifa /> pasar los datos que conformaran las tablas de nueva Tarifa como:
									<TabsArea data={bunchOfAllAreasData} /> 
									y sino pasarlo como:
									<TabsArea>
										<TablaNuevaTarifa data={datosA} />
										<TablaNuevaTarifa data={datosB} />
									</TabsArea>
								*/}

                  <span>Areas Container</span>
                  <AreasContainer />
                </>
              );
            }}
          </AppContextConsumer>
        </div>
      </>
    );
  }
}
