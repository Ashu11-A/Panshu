import React, { Component } from 'react';
import { Chart, LineAdvance } from 'bizcharts';

/*
const scale = {
	'sales': {
	  type: 'linear',
	  alias: 25,
	  range: [1, 15],
	  tickCount: 4,
	  ticks: [1, 15]
	}
  };
*/

class Demo extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { data } = this.props
		return <>
			<h1>Dados salvos</h1>
			<Chart padding={[10, 20, 50, 40]} autoFit height={300} data={data} >
				<LineAdvance
					shape="circle"
					point
					area
					position="time*dados"
					color="type"
				/>

			</Chart>
		</>
	}
}




export default Demo