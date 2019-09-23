import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Index from './components/Index'
import Componente from './components/Componente'
import Servicios from './components/Servicios'
import Areas from './components/Areas/Areas'

export default function Router () {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route exact path="/fedex" component={Servicios}/>
        <Route exact path="/dhl" component={Servicios}/>
        <Route exact path="/merq" component={Servicios}/>

        <Route exact path="/dhl/10" component={Areas}/>

        {/* <Route exact path="/:proveedor/:servicio" component={Componente}/> */}

        <Route exact path="/ruta" component={Componente}/>
        
      </Switch>
    </BrowserRouter>
  )
}