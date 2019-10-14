
export default class Cobertura{

  constructor(
    name,
    selected=false,
    tarifas=null,

  ){
    this.name=name
    this.selected=selected
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
//    
//     tarifas: [
//       {
//         nombre: "",
//         precios: {
    //       desde: "",
    //       hasta: "",
    //       sub: "",
    //       extra: ""
//     },
//       }
//     ]
//   }
// ]
