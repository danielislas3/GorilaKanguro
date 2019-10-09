import Tarifa from './Tarifa'

export default class Peso extends Tarifa{
  constructor(key,desde ,hasta, subTotal, kgExtra ){

    super(desde,hasta)
    this.key=key
    this.subTotal=subTotal
    this.kgExtra=kgExtra
  }


}