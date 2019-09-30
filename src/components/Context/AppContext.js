import React, {Component,createContext} from 'react';

export const AppContext = createContext();
const {Provider,Consumer} = AppContext

export class AppContextProvider extends Component {
    state={
        
        usuarios: ['Vicente, Daniel'],
        titulo: 'Contexto',
        servicios: [
                {
                    id: 10,
                    provider_id: 300,
                    name: 'EXPRESS WORLDWIDE'
                },
                {
                    id: 11,
                    provider_id: 400,
                    name: 'EXPRESS DOMESTIC'
                },
                {
                    id: 13,
                    provider_id: 500,
                    name: 'ECONOMY SELECT DOMESTIC'
                }
        ],
         datitos:[],
        coberturas:{
            desde:null,
            hasta:null,
            sub:null,
            ext:null,
            count:null,
            tarifas:[
                {title:'Default',sub:'', ext:''},
                {title:'Kanguro 1',sub:'', ext:''},
                {title:'Kanguro 2',sub:'', ext:''},
                ],
            
        }
        }
        
    addServices=servicios=>{
            this.setState(prev=>({servicios:[...prev.servicios,servicios]}))
          }
    addToDatitos=datito=>{
            this.setState(prev=>({datitos:[...prev.datitos,datito]}))
        
          }
    toggleTarifas=nuevaTarifa=>{
       
        this.setState(prev=>({tarifas:[...prev.tarifas,nuevaTarifa]}))
    }

    render() {
        const {addServices,addToDatitos,toggleTarifas} = this
        return(
            <Provider value={{state:this.state,addServices,addToDatitos,toggleTarifas}}>
            
                {this.props.children}
            </Provider>
        );
    }
}

export const AppContextConsumer = Consumer;

