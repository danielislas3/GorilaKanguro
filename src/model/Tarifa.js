import Precio from './Peso'

export default class Tarifa {

  constructor(nombre,precios=null){
    this.nombre=nombre
    this.precios=[precios]
    
  }

  newPrecio(key,desde ,hasta, subTotal, kgExtra){
    this.precios.push(new Precio(key,desde,hasta,subTotal,kgExtra))
  }
}

/*
this.precios={
  desde,
  hasta,
  subTotal,
  kgExtra,
}  
*/