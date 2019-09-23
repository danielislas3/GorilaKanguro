import React from 'react'
import {Link} from 'react-router-dom'
import Proveedor from './Proveedor'


export default function index() {
  return (
    <div>

      <h1>Proveedores</h1>

      {/* DHL */}
      
      <Proveedor src="https://s3.amazonaws.com/cdn.wp.m4ecmx/wp-content/uploads/2017/10/11100711/DHLlogo1200.jpg" name='DHL' desc="descripcion" to="servicios/dhl"/> 
    


      {/* FEDEX */}
      <Link to="/ruta">
        <Proveedor src="https://graffica.info/wp-content/uploads/2017/06/FedEXCabEnfocado.jpg" name='FEDEX' desc="descripcion fedex"  to="servicios/fedex"/> 
      </Link>

      {/* MERQ */}
      <Link to="/ruta">
      <Proveedor src="http://merq.com.mx/wp-content/uploads/2016/09/LOGO.png" name='MERQ' desc="descripcion merq" to="servicios/merq"/> 
      </Link>



    </div>
  )
}
