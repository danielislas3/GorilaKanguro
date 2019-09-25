import React, { useState, useEffect } from 'react'
import { Card } from 'antd';
import CardSection from './CardSection';
const { Meta } = Card;

export default function Servicios() {
	const services =
		[
			{
				id: 10,
				provider_id: 300,
				name: 'EXPRESS WORLDWIDE'
			},
			{
				id: 11,
				provider_id: 400,
				name: 'EXPRESS DOMESTIC'
			},
			{
				id: 13,
				provider_id: 500,
				name: 'ECONOMY SELECT DOMESTIC'
			}
		]

	const [servicio, setServicio] = useState(0);
	useEffect(() => {
		// peticion API 
	}, []);

	return (
		<div>

			{console.log(services)}
			<h1>Servicios</h1>

			{services.map(item =>
				<CardSection to={`/dhl/${item.id}`} name={item.name} desc={item.provider_id} key={item.id} />
			)}

		</div>
	)
}
