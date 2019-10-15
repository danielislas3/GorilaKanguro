
export default class Peso {
  constructor(key,desde ,hasta, subTotal, preKgExtra ){

    this.key=key
    this.desde=desde
    this.hasta=hasta
    this.sub=subTotal
    this.preKgExtra=preKgExtra
  }

  edit(opc,value){
    if(opc==='desde')this.desde=value
    if(opc==='hasta')this.hasta=value
    if(opc==='subTotal')this.sub=value
    if(opc==='preKgExtra')this.preKgExtra=value
  }

}