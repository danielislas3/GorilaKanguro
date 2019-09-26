import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Badge, Button, Icon, Switch, Collapse } from 'antd';
import { Descriptions,Breadcrumb } from 'antd';
import NuevaTarifa from './NuevaTarifa'
import AreasContainer from './AreasContainer'
import Tabla from '../Areas/Tabla';
import { AppContextConsumer } from '../../components/Context/AppContext';
const { Panel } = Collapse;
const ButtonGroup = Button.Group;

export default class Areas extends Component {

	state = {
		data: [
			{
				id: 999,
				name: 'A',
				count: 421,
				states: ['CDMX', 'Aguascalientes', 'Baja', 'California', 'Mexicali', 'Baja', 'California', 'Sur', 'La Paz', 'Campeche', 'San', 'Francisco', 'de', 'Campeche', 'Chihuahua', 'Chihuahua', 'Tuxtla', 'Gutiérrez', 'Coahuila', 'Saltillo', 'Colima', 'Colima', 'Francisco', 'de', 'Campeche', 'Chihuahua', 'Chihuahua', 'Tuxtla', 'Gutiérrez', 'Coahuila', 'Saltillo', 'Colima', 'Colima'],

			},
			{
				id: 890,
				name: 'B',
				count: 321,
				states: ['Francisco', 'de', 'Campeche', 'Chihuahua', 'Chihuahua', 'Tuxtla', 'Gutiérrez', 'Coahuila', 'Saltillo', 'Colima', 'Colima'],

			},
			{
				id: 234,
				name: 'C',
				count: 543,
				states: ['CDMX', 'Aguascalientes', 'Baja', 'California', 'Mexicali', 'Baja', 'California', 'Sur', 'La Paz', 'Campeche', 'Chihuahua', 'Tuxtla', 'Gutiérrez', 'Coahuila', 'Saltillo', 'Colima', 'Colima'],

			},
		],
		currentService: 'EXPRESS DOMESTIC',
		count: 5,
		show: true,
	}
	increase = () => {
		const count = this.state.count + 1;
		this.setState({ count });
	};

	decline = () => {
		let count = this.state.count - 1;
		if (count < 0) {
			count = 0;
		}
		this.setState({ count });
	};

	onChange = show => {
		this.setState({ show });
	};

	toggleCollapse = () => {
		console.log('toggling')
	};

	render() {

		return (
			<AppContextConsumer>

				{value => {
					console.log('Valores')
					console.log(value)

					return (
						<>
							<Link to="/">
								Home
							</Link>

							{/* Seccion Areas */}
							<h1>Areas</h1>
							<Breadcrumb>
								<Breadcrumb.Item>
									<Link to='/'>
										Proveedores
								</Link>
								</Breadcrumb.Item>
								<Breadcrumb.Item>
									<Link to="/dhl">DHL</Link>
								</Breadcrumb.Item>

								<Breadcrumb.Item>EXPRESS WORLDWIDE</Breadcrumb.Item>
							</Breadcrumb>

							{this.state.data.map(area =>
								<>
									<Collapse defaultActiveKey="0">
										<Panel header={area.name} key="1">

											<Descriptions title="kanguro envio de 1 a 3 dias" layout="vertical"
												column={{ xxl: 4, xl: 3, lg: 2, md: 2, sm: 2, xs: 1 }}>
												<Descriptions.Item label="Estados">Hangzhou, Zhejiang,Hangzhou, Zhejiang,Hangzhou, Zhejiang,Hangzhou, Zhejiang,</Descriptions.Item>
												<Descriptions.Item label="Codigo postales">434</Descriptions.Item>
											</Descriptions>

										</Panel>
									</Collapse>
								</>
							)}

							{/* Seccion Tarifas (de Areas)*/}
							<div>
								<br />
								<br />
								<h2>Tarifas</h2>

								{/* <TablaPesoTarifa /> pasar los datos que conformaran las tablas de nueva Tarifa como:
									<TabsArea data={bunchOfAllAreasData} /> 
									y sino pasarlo como:
									<TabsArea>
										<TablaNuevaTarifa data={datosA} />
										<TablaNuevaTarifa data={datosB} />
									</TabsArea>
								*/}
								<Tabla/>
								{/* Crear nueva tarida, añadir ventana */}
								<AreasContainer/>

								<p>{value.titulo}</p>

							</div>
						</>
					);
				}}
			</AppContextConsumer>
		)
	}
}
