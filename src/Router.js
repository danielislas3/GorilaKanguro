import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Index from './components/Index'
import Servicios from './components/Servicios'
import Areas from './components/Areas'
import NotFound from './components/NotFound'

export default function Router () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route exact path="/:id" component={Servicios}/>
        {/* <Route exact path="/fedex" component={Servicios}/>
        <Route exact path="/dhl" component={Servicios}/>
        <Route exact path="/merq" component={Servicios}/> */}

        <Route exact path="/dhl/10" component={Areas}/>

        {/* <Route exact path="/:proveedor/:servicio" component={Componente}/> */}      
        <Route exact path='*' component={NotFound} />

      </Switch>
    </BrowserRouter>
  )
} 