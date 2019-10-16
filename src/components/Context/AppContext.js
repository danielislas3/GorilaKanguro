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
  componentDidMount(){
    console.log('*****FETCH DE DATA****')
    
  }
  
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
      new Cobertura('DefaultI',undefined,new Tarifa('Kangurito 1',new Precios(1,"1.1","2","23","34")))],

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
    const cob = new Cobertura(name,undefined,new Tarifa('Kanguro 1',new Precios(0,12,23,34,45)))

    this.setState(prev => ({
      coberturas: [...prev.coberturas, cob]
    }));
  };

  addTarifas=(i,tarifa)=>{
    this.state.coberturas[i+1].newTarifa(tarifa)
  }
  addPeso=(indexCob,indexTar,precio)=>{
    let {key,desde,hasta,sub,preKgExtra} = precio
    console.log('******PRECIO******')
    console.log(precio)
    this.state.coberturas[indexCob].tarifas[indexTar].newPrecio(key,desde,hasta,sub,preKgExtra)
  }
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

  editPesos=(newData,index,precioIndex)=>{
    console.log('SAVE DATA desde context')
    console.log(newData)
    console.log(index)
    
    this.state.coberturas[index.indexCobertura].tarifas[index.indexTarifa].editPrecios(newData)
  }


  render() {
    const {
      addServices,
      addToDatitos,
      addCobertura,
      saveDataSource,
      addTarifas,
      addPeso,
      editPesos,
      state
    } = this;

    return ( <Provider value = {
        {
          state: state,
          addServices,
          addToDatitos,
          addCobertura,
          saveDataSource,
          addTarifas,
          addPeso,
          editPesos
        }
      } >
      {
        this.props.children
      } </Provider>
    );
  }
}

export const AppContextConsumer = Consumer;