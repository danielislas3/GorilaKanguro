export default class Cobertura{

  constructor(
    name,
    selected=false,
    precios,
    desde,hasta,subTotal,kgExtra,
    tarifas,
      nombreTarifa,
      sub,
      kgEx,


  ){
    this.name=name
    this.selected=selected
    this.precios={
      desde,
      hasta,
      subTotal,
      kgExtra,
    }
  this.tarifas=[{tarifas}]
  }

  newTarifa(newTarifa){
    this.tarifas.push({newTarifa})
  }
}