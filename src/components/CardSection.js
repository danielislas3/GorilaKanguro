import React from "react";
import { Card,Rate } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;
//{name, src='https://www.ocs-consulting.nl/wp-content/uploads/2018/04/managed-services-with-ocs-consulting-icon.png', desc,to }

export default function CardSection({
  src = "https://www.ocs-consulting.nl/wp-content/uploads/2018/04/managed-services-with-ocs-consulting-icon.png",
  desc,
  to,
  name,
  rank,
  data
}) {
  console.log(data)
  return (
    <div>
      <Link to={to}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt={name} src={src} />}
        >
          <Meta title={name} description={desc} />
          <br/>
          <Rate allowHalf defaultValue={rank} />
         
        </Card>
        ,
      </Link>
    </div>
  );
}
