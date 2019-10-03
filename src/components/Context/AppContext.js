import React, {Component,createContext} from 'react';

export const AppContext = createContext();
const {Provider,Consumer} = AppContext

export class AppContextProvider extends Component {
    state={
        name:"CONTEXTO",
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
        datitos:[],
        coberturas:[
            {
                name:'Default',
                selected:null,
                precios:{

                    desde:'',
                    hasta:'',
                    sub:'',
                    extra:'',
                },
                tarifas:[
                    {
                        nombre:'',
                        sub:'',
                        extra:''
                    }
                ]  
            }
        ]
        // coberturas:{
        //     name:'',
        //     desde:null,
        //     hasta:null,
        //     sub:null,
        //     ext:null,
        //     count:null,
        //     tarifas:[
                
        //         {title:'Default',sub:'', ext:'',data:{}},
        //         {title:'Kanguro 1',sub:'', ext:'',data:{}},
        //         {title:'Kanguro 2',sub:'', ext:'',data:{}},
        //         ]
        
        // }
    }
        
    addServices=servicios=>{
            this.setState(prev=>({servicios:[...prev.servicios,servicios]}))
          }
    addToDatitos=datito=>{
            this.setState(prev=>({datitos:[datito]}))
        
          }

    addCobertura=(cobertura)=>{
        //
        // const newColumns= {
        //     title: string;
        //     dataIndex: string;
        //     editable: boolean;
        //     children: {
        //         title: string;
        //         dataIndex: string;
        //         editable: boolean;
        //     }[];
        // }
       const name= cobertura.title 
       const precios={
           desde:cobertura,
           hasta:'',
           sub:'',
       }

       const newCobertura={
           name,

       }   
    //cobertura va a ser un array (childrends de tabla)
         //const newObj={...this.state.coberturas, tarifas:cobertura} 
         this.setState(prev=>({coberturas:[...prev.coberturas,cobertura]}))
    }

    // addCobertura=(cobertura)=>{
    // //cobertura va a ser un array (childrends de tabla)
    //      const newObj={...this.state.coberturas, tarifas:cobertura} 
    //      this.setState({coberturas:newObj})
    // }
    render() {
        const {addServices,addToDatitos,toggleTarifas,addCobertura,state} = this
        return(
            <Provider value={{state:state,addServices,addToDatitos,toggleTarifas,addCobertura}}>
            
                {this.props.children}
            </Provider>
        );
    }
}

export const AppContextConsumer = Consumer;



