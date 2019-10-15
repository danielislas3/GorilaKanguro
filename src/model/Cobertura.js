export default class Cobertura {

  constructor(
    name,
    selected = false,
    tarifas = null,

  ) {
    this.name = name
    this.selected = selected
    this.tarifas = [tarifas]

  }

  newTarifa(newTarifa) {
    this.tarifas.push(newTarifa)
  }
}

