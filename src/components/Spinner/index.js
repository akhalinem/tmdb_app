import React, { Component } from 'react';
import { ClipLoader } from 'react-spinners';

class Spinner extends Component {
	render() {
		return (
			<div
				style={{
					position: 'fixed',
					backgroundColor: 'inherit',
					width: window.screen.width,
					height: window.screen.height,
					display: 'flex',
					flex: 1,
					justifyContent: 'center',
					paddingTop: '10%'
				}}
			>
				<ClipLoader color='white' size={100} />
			</div>
		);
	}
}

export default Spinner;
