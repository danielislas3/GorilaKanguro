import React, {Component,createContext} from 'react';

export const AppContext = createContext({
    usuarios: [1,2,3],
    titulo: 'default'
});
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
            datitos:[]
        }
        addServices=servicios=>{
            this.setState(prev=>({servicios:[...prev.servicios,servicios]}))
          }
        addToDatitos=datito=>{
            this.setState(prev=>({datitos:[...prev.datitos,datito]}))
        
          }
    render() {
        const {addServices,addToDatitos} = this
        return(
            <Provider value={{state:this.state,addServices,addToDatitos}}>
            
                {this.props.children}
            </Provider>
        );
    }
}

export const AppContextConsumer = Consumer;

