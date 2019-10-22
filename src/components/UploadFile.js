import React, { Component } from 'react'
import { message } from 'antd';
import Axios from 'axios'

export default class UploadFile extends Component {
state={
  name:''
}
obtenerArchivo= async e=>{
  const base_url=''
  const archivo = new FormData();
   let extension = e.target.files[0].name.split('.')[1]

   if(!(extension === 'csv' || extension === 'xlsx' || extension === 'xls')){
    message.error('El archivo debe estar en un formato valido (csv, xlsx, xls).')
  }
   

   archivo.append('file', e.target.files[0])

   const enviarAlServer = await Axios.post(`${base_url}/api`, archivo)
}

  render() {
    return (
      <>
        <input type="file" accept=".csv,.xlsx,.xls,.pdf" onChange={this.obtenerArchivo}/>
        
      </>
    )
  }
}
