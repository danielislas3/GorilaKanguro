import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Index from './components/Index'
import Componente from './components/Componente'

export default function Router () {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route exact path="/ruta" component={Componente}/>
      </Switch>
    </BrowserRouter>
  )
}