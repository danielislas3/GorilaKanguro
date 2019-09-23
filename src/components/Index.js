import React from 'react'
import CardSection from './CardSection'


export default function index() {
  return (
    <div>

      <h1>Proveedores</h1>

      {/* DHL */}
      
      <CardSection src="https://s3.amazonaws.com/cdn.wp.m4ecmx/wp-content/uploads/2017/10/11100711/DHLlogo1200.jpg" name='DHL' desc="descripcion" to="dhl"/> 
    
      {/* FEDEX */}
      <CardSection src="https://graffica.info/wp-content/uploads/2017/06/FedEXCabEnfocado.jpg" name='FEDEX' desc="descripcion fedex"  to="fedex"/> 
  
      {/* MERQ */}
      <CardSection src="http://merq.com.mx/wp-content/uploads/2016/09/LOGO.png" name='MERQ' desc="descripcion merq" to="merq"/> 




    </div>
  )
}
