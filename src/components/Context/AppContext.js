import React, { Component, createContext } from 'react';
import Ruta from '../../model/Ruta'
import Area from '../../model/Area'
import Cobertura from '../../model/Cobertura'
export const AppContext = createContext();
const { Provider, Consumer } = AppContext


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
        datitos: [],
        rutas: [
            new Ruta(
            1, 'code', 'name', 'created_at', 'updated_at', 'deleted_at', 'origin_zone_id','destination_zone_id', 'provider_service_id', new Area(1)),
            new Ruta(2, 'code', 'name', 'created_at', 'updated_at', 'deleted_at', 'origin_zone_id', 'destination_zone_id', 'provider_service_id', new Area(2)),
            new Ruta(3, 'code', 'name', 'created_at', 'updated_at', 'deleted_at', 'origin_zone_id', 'destination_zone_id', 'provider_service_id', new Area(3)),
        ],
        coberturas: [
            {
                name: 'Default',
                selected: null,
                precios: {
                    desde: '',
                    hasta: '',
                    sub: '',
                    extra: '',
                },
                tarifas: [
                    {
                        nombre: '',
                        sub: '',
                        extra: ''
                    }
                ]
            },
            
        ]
    }

    addServices = servicios => {
        this.setState(prev => ({ servicios: [...prev.servicios, servicios] }))
    }
    addToDatitos = datito => {
        this.setState(prev => ({ datitos: [datito] }))

    }

    addCobertura = (name,precios,tarifas) => {
         const nameCob = new Cobertura(name,undefined,12,32,23,11,{  nombre: '',  sub: '',  extra: ''});
        this.setState(prev => ({ coberturas: [...prev.coberturas, nameCob]}))
    }


    render() {
        const { addServices, addToDatitos, toggleTarifas, addCobertura, state } = this
        return (
            <Provider value={{ state: state, addServices, addToDatitos, toggleTarifas, addCobertura}}>

                {this.props.children}
            </Provider>
        );
    }
}

export const AppContextConsumer = Consumer;



