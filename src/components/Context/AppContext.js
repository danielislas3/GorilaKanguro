import React, {
  Component,
  createContext
} from "react";
import Ruta from "../../model/Ruta";
import Area from "../../model/Area";
import Cobertura from "../../model/Cobertura";
import Tarifa from "../../model/Tarifa";
import Precios from "../../model/Peso";
import {
  async
} from "q";

export const AppContext = createContext();
const {
  Provider,
  Consumer
} = AppContext;

export class AppContextProvider extends Component {

  async componentDidMount() {
    console.log('*****FETCH DE DATA****')
    const token = process.env.REACT_APP_TOKEN

    fetch(
      'https://dev.envioskanguro.com/api/v1/provider_services', {
        'headers': {
          'Authorization': `bearer ${token}`,
          'Content-Type': ' application/json'
        }
      }
    ).then(async (res)  => {
      const data = await console.log(res.json())
      const promise = Promise.all([data])
       .then(data => {
       console.log('Promise.all Resolved', data);
  })
    console.log(promise)
      
    }).catch((error) => {
      console.log(error)
    })
    // var myHeaders = new Headers({
    //   "Content-Type": "application/javascript,application/json",
    //   "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJjMjBjOGE5NTZiZjhjZGJjNWZiZWQ5NTkwZmZiZmI2YjM0MmQxZjUwZDUzZjhhYmRjNTQ5YWRhMWIyOGNiNTg3YjBjM2E3YWZlNjVhODBhIn0.eyJhdWQiOiIxIiwianRpIjoiMmMyMGM4YTk1NmJmOGNkYmM1ZmJlZDk1OTBmZmJmYjZiMzQyZDFmNTBkNTNmOGFiZGM1NDlhZGExYjI4Y2I1ODdiMGMzYTdhZmU2NWE4MGEiLCJpYXQiOjE1NzE0MjU1NjUsIm5iZiI6MTU3MTQyNTU2NSwiZXhwIjoxNjAzMDQ3OTY1LCJzdWIiOiI1Iiwic2NvcGVzIjpbInJlc3Qtb3JkZXJzIl19.gK2hMDxV81k1FAjMjlLOSBeONhDvzatU-GBQoBRYjpbAKXdYyNbL2ZZ_md61jFbXnH3J-7Et8WAnVCHDGJBfjKWRKpFHyMdt6KmJQ_viJmlyTsQ3vIWBD6y4bxSj_FSVNlL9UhzBWTqlbb7l03k4xlcDmFXAaEuFMmKzNAu4du09xqeiZcKvnZNrTHoRbA2QmHYyOd8IKBJXOdYZg_otNVgOB-bcuBUxM8n3IZQCyNDg1mL5jBoemXSSN8i683yvllRT4JyxRAPRTG99NML4R7-wihpYEEkn6hdf_hWJUnpvwU-1tQSIk6wVKAuEl71_r2rjcf3WlhQoJ0CfYHD3TsM8_z9gAa5HBxUAexwuzGkADAl4myLB_Hf5uh35YHQShweMCJjtQbzaAZZNBqo2KcHEUY9pCOGn_e4IcP61Jwh9od5JGu42RD29eouo5hkQVrvCdvFDnTrPCi8Q9bO4LspGy6B98XvqKk4pbFsQFRAkBgvSI4YyBbkpoqJ1pnwvIHv1sfqYyC-QYnKedVJ4GkxKRlNzZ9Qr3cN5WH4Ovzfbh1YCVGMJAypq3AbO-BQN1-UiucC48Ky-P6xLL9OWtTzxsvcyFU31IIkyFUSDAtKEp3brXTRB-dj5Hbfd3ED_0_vH0HwAVQzojqg-1rdLJD3Z-QwzN0ijI0lC1mn14k0",
    //   "Accept": "*/*",
    //   "Cache-Control": "no-cache",
    //   "Host": "dev.envioskanguro.com",

    // });
    // const myInit = {
    //   method: 'GET',
    //   headers: myHeaders,
    //   mode: 'cors',
    //   cache: 'default'
    // }
    // let response = await fetch(`https://dev.envioskanguro.com/api/v1/provider_services`, myInit);
    // let data = await console.log(response)




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
      } < /Provider>);
    }
  }

  export const AppContextConsumer = Consumer;