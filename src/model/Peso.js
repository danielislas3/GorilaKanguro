
export default class Peso {
  constructor(key, desde, hasta, subTotal, preKgExtraK) {

    this.key = key
    this.desde = desde
    this.hasta = hasta
    this.subK = subTotal
    this.subT = "4"
    this.preKgExtraT = "0"
    this.preKgExtraK = preKgExtraK
    }
    
    
    
  edit(opc, value) {
    if (opc === 'desde') this.desde = value
    if (opc === 'hasta') this.hasta = value
    if (opc === 'subTotal') this.subK = value
    if (opc === 'preKgExtraK') this.preKgExtraK = value
  }

}
