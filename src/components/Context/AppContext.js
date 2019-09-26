import React from 'react';

export const AppContext = React.createContext({
    usuarios: [1,2,3],
    titulo: 'default'
});

export class AppContextProvider extends React.Component {
    render() {
        return(
            <AppContext.Provider value={{
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
                ]
            }}>
            
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export const AppContextConsumer = AppContext.Consumer;

