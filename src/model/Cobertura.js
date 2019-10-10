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

// coberturas: [
//   {
//     name: "Default",
//     selected: null,
//     precios: {
//       desde: "",
//       hasta: "",
//       sub: "",
//       extra: ""
//     },
//     tarifas: [
//       {
//         nombre: "",
//         sub: "",
//         extra: ""
//       }
//     ]
//   }
// ]
