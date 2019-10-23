import React, {
  Component,
  createContext
} from "react";
import Ruta from "../../model/Ruta";
import Area from "../../model/Area";
import Cobertura from "../../model/Cobertura";
import Tarifa from "../../model/Tarifa";
import Precios from "../../model/Peso";
import {Uri,headersApp} from '../../helpers/Uri'
import axios from 'axios'

export const AppContext = createContext();
const {Provider,Consumer} = AppContext;

export class AppContextProvider extends Component {

  async componentDidMount() {
    console.log('*****FETCH DE DATA****')
    
    // const res = await axios.get(Uri('provider_services', {
    //   with: 'user'
    // }),headersApp)
    // if (res.status !== 200) {
    //   console.error('Error: ' + res.status)
    // }
    // console.log(res.data)
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
    colums: [{
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
        dataIndex: "subT",
        editable: true
      },
      {
        title: "Precio/Kg extra Normal",
        dataIndex: "preKgExtraT",
        editable: true
      },
      {
        title: "Subtotal -1",
        dataIndex: "subK",
        editable: true
      },
      {
        title: "Precio/Kg extra1",
        dataIndex: "preKgExtraK",
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
      new Cobertura('DefaultI', undefined, new Tarifa('Kangurito 1', new Precios(1, "1.1", "2", "23", "34")))
    ],

    coberturas2: [{
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
    }]
  };

  addServices = servicios => {
    this.setState(prev => ({
      servicios: [...prev.servicios, servicios]
    }));
  };


  addCobertura = (name) => {

    const cob = new Cobertura(name, undefined, new Tarifa('Kanguro 2', new Precios(0, 12, 23, 34, 45)))

    this.setState(prev => ({
      coberturas: [...prev.coberturas, cob]
    }));
  };

  addTarifas = (i, tarifa) => {
    // i = 
    console.log('**i**')
    console.log(i + 1)

    this.state.coberturas[i + 1].newTarifa(tarifa)
  }
  addPeso = (indexCob, indexTar, precio) => {
    let {
      key,
      desde,
      hasta,
      subK,
      preKgExtraK
    } = precio
    console.log('******PRECIO******')
    console.log(precio)
    this.state.coberturas[indexCob].tarifas[indexTar].newPrecio(key, desde, hasta, subK, preKgExtraK)
  }
  saveDataSource = datosTarifas => {

    let stateCopy = {
      ...this.state
    }
    let {
      coberturas2
    } = stateCopy;
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

  editPesos = (newData, index, precioIndex) => {
    console.log('SAVE DATA desde context')
    console.log(newData)
    console.log(index)

    this.state.coberturas[index.indexCobertura].tarifas[index.indexTarifa].editPrecios(newData)
  }
  coutCobertura = (count, index) => {
    this.state.coberturas[index].addDesdeHasta(count)
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
      coutCobertura,
      state
    } = this;

    return ( < Provider value = {
        {
          state: state,
          addServices,
          addToDatitos,
          addCobertura,
          saveDataSource,
          addTarifas,
          addPeso,
          editPesos,
          coutCobertura
        }
      } > {
        this.props.children
      } </Provider>);

    }
  }

  export const AppContextConsumer = Consumer;