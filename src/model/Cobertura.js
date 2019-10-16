export default class Cobertura {

  constructor(
    name,
    selected = false,
    tarifas = null,

  ) {
    this.name = name
    this.selected = selected
    this.desdeHasta=[{'desde':'0','hasta':'1'}]
    this.tarifas = [tarifas]

  }

  newTarifa(newTarifa) {
    this.tarifas.push(newTarifa)
  }
  
  addDesdeHasta(count){
    for (let index = 0; index <count; index++) {
      this.desdeHasta.push({'desde':index+.6,'hasta':index+1})
      console.log('push')
    }
      
    }
}

