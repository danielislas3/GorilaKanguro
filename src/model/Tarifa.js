import Precio from './Peso'

export default class Tarifa {

  constructor(nombre,precios=null){
    this.nombre=nombre
    this.precios=[precios]
    
  }

  newPrecio(key,desde ,hasta, subTotal, kgExtra){
    this.precios.push(new Precio(key,desde,hasta,subTotal,kgExtra))
  }
  
  editPrecios(index,newData){
   const newPrecios = newData.map(e => {
      new Precio(e.key,e.desde,e.hasta,e.sub,e.preKgExtra)
    });
    
    this.precios=newPrecios
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