import React, { Component, createContext } from "react";
import Ruta from "../../model/Ruta";
import Area from "../../model/Area";
import Cobertura from "../../model/Cobertura";
export const AppContext = createContext();
const { Provider, Consumer } = AppContext;

export class AppContextProvider extends Component {
  state = {
    name: "CONTEXTO",
    // servicios: [
    //         {
    //             id: 10,
    //             provider_id: 300,
    //             name: 'EXPRESS WORLDWIDE'
    //         },
    //         {
    //             id: 11,
    //             provider_id: 400,
    //             name: 'EXPRESS DOMESTIC'
    //         },
    //         {
    //             id: 13,
    //             provider_id: 500,
    //             name: 'ECONOMY SELECT DOMESTIC'
    //         }
    // ],
    colums: [
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
    ],
    rutas: [
      new Ruta(
        1,
        "code",
        "name",
        "created_at",
        "updated_at",
        "deleted_at",
        "origin_zone_id",
        "destination_zone_id",
        "provider_service_id",
        new Area(1)
      ),

      new Ruta(
        2,
        "code",
        "name",
        "created_at",
        "updated_at",
        "deleted_at",
        "origin_zone_id",
        "destination_zone_id",
        "provider_service_id",
        new Area(2)
      ),

      new Ruta(
        3,
        "code",
        "name",
        "created_at",
        "updated_at",
        "deleted_at",
        "origin_zone_id",
        "destination_zone_id",
        "provider_service_id",
        new Area(3)
      )
    ],
    coberturas: [
      {
        name: "Default",
        selected: null,
        precios: {
          desde: "",
          hasta: "",
          sub: "",
          extra: ""
        },
        tarifas: [
          {
            nombre: "",
            sub: "",
            extra: ""
          }
        ]
      }
    ],
    coberturas2: [
      {
        nombre: "",
        tarifas: [
          {
            nombre: "",
            precios: [
              {
                desde: "1.01",
                hasta: "2",
                key: "1",
                preKgExtra: "1",
                sub: "94.85"
              }
            ]
          }
        ]
      }
    ]
  };

  addServices = servicios => {
    this.setState(prev => ({ servicios: [...prev.servicios, servicios] }));
  }; 
  addToDatitos = datito => {
    this.setState(prev => ({ datitos: [datito] }));
  };

  addCobertura = (name, precios, tarifas) => {
    const nameCob = new Cobertura(name, undefined, 12, 32, 23, 11, {
      desde: "",
      hasta: "",
      nombre: "",
      sub: "",
      preKgExtra: "",
      key: 0
    });
    this.setState(prev => ({ coberturas: [...prev.coberturas, nameCob] }));
  };

  saveDataSource = datosTarifas => {
    console.log("datosTarifas desde context");
    console.log(datosTarifas);

    const newTarifa = {
      nombre: datosTarifas.nameTarifa,
      precios: datosTarifas.precios
    };
    this.setState(prev => ({ coberturas2: [...prev.coberturas, newTarifa] }));
  };
  render() {
    const {
      addServices,
      addToDatitos,
      addCobertura,
      saveDataSource,
      state
    } = this;

    return (
      <Provider
        value={{
          state: state,
          addServices,
          addToDatitos,
          addCobertura,
          saveDataSource
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export const AppContextConsumer = Consumer;
