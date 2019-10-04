import React from 'react'
import CardSection from './CardSection'
import ProviderService from '../model/ProviderService'

export default function index() {
  let card = new ProviderService(null,'provedor1',7,null,null,'/dhl')
  console.log('card')
  console.log(card)
  return (
    <div>

      <h1>Proveedores</h1>

      {/* DHL */}
      
      <CardSection card={card} src="https://s3.amazonaws.com/cdn.wp.m4ecmx/wp-content/uploads/2017/10/11100711/DHLlogo1200.jpg" name='DHL' desc="descripcion" to="dhl" /> 
    
      {/* FEDEX */}
      <CardSection src="https://graffica.info/wp-content/uploads/2017/06/FedEXCabEnfocado.jpg" name='FEDEX' desc="descripcion fedex"  to="fedex" card={card}/> 
  
      {/* MERQ */}
      <CardSection src="http://merq.com.mx/wp-content/uploads/2016/09/LOGO.png" name='MERQ' desc="descripcion merq" to="merq" card={card}/> 
  



    </div>
  )
}
