import React, { Component } from 'react';
import { Chart, LineAdvance } from 'bizcharts';

class Demo extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { data, title, position, color } = this.props
		return <>
			<h1>{title}</h1>
			<Chart padding={[10, 20, 50, 40]} autoFit height={300} data={data} >
				<LineAdvance
					shape="circle"
					point
					area
					position={position}
					color={color}
					size={3}
					animate={{ duration: 100, easing: 'easeLinear' }}
				/>

			</Chart>
		</>
	}
}




export default Demo