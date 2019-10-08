export default class Cobertura{

  constructor(
    name,
    selected=false,
    desde,hasta,subTotal,kgExtra,
    tarifas,

  ){
    this.name=name
    this.selected=selected
    this.precios={
      desde,
      hasta,
      subTotal,
      kgExtra,
    }
  this.tarifas=[tarifas]
  }

  newTarifa(newTarifa){
    this.tarifas.push(newTarifa)
  }
}