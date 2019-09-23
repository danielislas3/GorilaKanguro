import React from 'react'
import { Card } from 'antd';
import {Link } from 'react-router-dom'
const { Meta } = Card;

export default function Proveedor({name, src, desc,to} ) {
  return (
    <div>
      
      <Link to ={to}>
        <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={name} src={src} />}>

      <Meta title={name} description={desc} />
      </Card>,

      </Link>
    </div>
  )
}
