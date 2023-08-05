import React, { Component } from 'react';
import { Chart, LineAdvance, Area } from 'bizcharts';

class LineChart extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { data, title, position, color } = this.props

		const scale = {
			imagesProcessed: {
			  min: 1000,
			  nice: true,
			},
			time: {
			  range: [0, 1],
			},
		  };

		return <>
			<h1>{title}</h1>
			{!color ? (
				<>
					<Chart scale={scale} height={300} data={data} autoFit>
						<Area position={position} />
					</Chart>
				</>
			) : (
				<>
					<Chart padding={[10, 20, 70, 40]} autoFit height={300} data={data} >
						<LineAdvance
							shape="smooth"
							point
							area
							position={position}
							color={color}
							size={3}
							animate={{ duration: 100, easing: 'easeLinear' }}
						/>
					</Chart>

				</>
			)}
		</>
	}
}

export default LineChart
