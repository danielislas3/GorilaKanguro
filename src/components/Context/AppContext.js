import React, {
  Component,
  createContext
} from "react";
import Ruta from "../../model/Ruta";
import Area from "../../model/Area";
import Cobertura from "../../model/Cobertura";
import Tarifa from "../../model/Tarifa";
import Precios from "../../model/Peso";
export const AppContext = createContext();
const {
  Provider,
  Consumer
} = AppContext;

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
    coberturas: [{
      name: "Default",
      selected: null,
      precios: {
        desde: "",
        hasta: "",
        sub: "",
        extra: ""
      },
      tarifas: [{
        nombre: "",
        sub: "",
        extra: ""
      }]
    }],

    coberturas2: [
      {
      name: "Default",
      selected: null,
      tarifas: [{
        nombre: "",
        precios: [{
          desde: "1.01",
          hasta: "2",
          key: "1",
          preKgExtra: "1",
          sub: "94.85"
        }]
      }]
    }
  ]
  };

  addServices = servicios => {
    this.setState(prev => ({
      servicios: [...prev.servicios, servicios]
    }));
  };
  addToDatitos = datito => {
    this.setState(prev => ({
      datitos: [datito]
    }));
  };

  addCobertura = (name, precios, tarifas) => {

    // const nameCob = new Cobertura(name, undefined, 12, 32, 23, 11, {
    //   desde: "",
    //   hasta: "",
    //   nombre: "",
    //   sub: "",
    //   preKgExtra: "",
    //   key: 0
    // });
    const cob = new Cobertura(name,undefined,new Tarifa('tarifa1',new Precios(0,12,23,34,45)))
    this.setState(prev => ({
      coberturas: [...prev.coberturas, cob]
    }));
  };

  /***
   * 
   * {
  //Get the sites from state
    let stateCopy = {...this.state}
    let {mySites} = stateCopy;
    let oilSite = mySites[ind]; //Get site by index
    //Add property to site
    oilSite.isVisible = false;
    mySites[ind] = oilSite;//update array
    //Update the state
    this.setState(stateCopy);

  }
   * ***/
  saveDataSource = datosTarifas => {

    let stateCopy = {...this.state}
    let {coberturas2} = stateCopy;

    let oilSite = coberturas2[0]

    console.log("datosTarifas desde context");
    console.log(datosTarifas);

    const newTarifa = {
      nombre: datosTarifas.nameTarifa,
      precios: datosTarifas.precios
    };

    this.setState(prev => ({
      coberturas2: [...prev.coberturas, newTarifa]
    }));
  };
 
  /**
   * 
 Take the following IPv4 address: 128.32.10.1 This address has 4 octets where each octet is a single byte (or 8 bits).

1st octet 128 has the binary representation: 10000000
2nd octet 32 has the binary representation: 00100000
3rd octet 10 has the binary representation: 00001010
4th octet 1 has the binary representation: 00000001
So 128.32.10.1 == 10000000.00100000.00001010.00000001

Because the above IP address has 32 bits, we can represent it as the 32 bit number: 2149583361.
  ipToInt32("128.32.10.1") => 2149583361

Write a function ip_to_int32(ip) ( JS: ipToInt32(ip) ) that takes an IPv4 address and returns a 32 bit number.
  */
  render() {
    const {
      addServices,
      addToDatitos,
      addCobertura,
      saveDataSource,
      state
    } = this;

    return ( <Provider value = {
        {
          state: state,
          addServices,
          addToDatitos,
          addCobertura,
          saveDataSource
        }
      } >
      {
        this.props.children
      } </Provider>
    );
  }
}

export const AppContextConsumer = Consumer;