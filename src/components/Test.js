import React, { Component } from 'react';
import { AppContextConsumer } from './Context/AppContext';

export default class Test extends Component {
	render() {
		return(
			<AppContextConsumer>
				{value => {
					// console.log('value')
					// console.log(value)
					return(	
						// <p>{value.titulo}</p>
						<div></div>
					);
				}}
			</AppContextConsumer>
		);
	}
}