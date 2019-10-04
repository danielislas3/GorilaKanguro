import React from 'react'
import { Card } from 'antd';
import {Link } from 'react-router-dom'
const { Meta } = Card;
//{name, src='https://www.ocs-consulting.nl/wp-content/uploads/2018/04/managed-services-with-ocs-consulting-icon.png', desc,to } 





export default function CardSection({src='https://www.ocs-consulting.nl/wp-content/uploads/2018/04/managed-services-with-ocs-consulting-icon.png', desc,to } ) {
  return (
    <div>
      
      <Link to ={to}>
        <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="algo" src={src}  />}>

      <Meta title="algo2" description={desc} />
      </Card>,

      </Link>
    </div>
  )
}
