
export default class Peso {
  constructor(key,desde ,hasta, subTotal, kgExtra ){

    this.key=key
    this.desde=desde
    this.hasta=hasta
    this.subTotal=subTotal
    this.kgExtra=kgExtra
  }

  edit(opc,value){
    if(opc==='desde')this.desde=value
    if(opc==='hasta')this.hasta=value
    if(opc==='subTotal')this.subTotal=value
    if(opc==='kgExtra')this.kgExtra=value
  }

}