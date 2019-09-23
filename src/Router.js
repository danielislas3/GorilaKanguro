import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Index from './components/Index'
import Componente from './components/Componente'
import Servicios from './components/Servicio'

export default function Router () {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route exact path="/servicios/fedex" component={Servicios}/>
        <Route exact path="/servicios/dhl" component={Servicios}/>
        <Route exact path="/servicios/merq" component={Servicios}/>
        <Route exact path="/ruta" component={Componente}/>
      </Switch>
    </BrowserRouter>
  )
}