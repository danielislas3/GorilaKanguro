import React, {Component,createContext} from 'react';

export const AppContext = createContext({
    usuarios: [1,2,3],
    titulo: 'default'
});
const {Provider,Consumer} = AppContext

export class AppContextProvider extends Component {
    render() {
        
        return(
            <Provider value={{
                usuarios: ['Vicente, Daniel'],
                titulo: 'App',
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
                context:''
            }}>
            
                {this.props.children}
            </Provider>
        );
    }
}

export const AppContextConsumer = Consumer;

