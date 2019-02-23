import React, { Component } from 'react';
import { ClipLoader } from 'react-spinners';

class Spinner extends Component {
	render() {
		return (
			<div
				style={{
					position: 'fixed',
					backgroundColor: 'transparent',
					top: 90,
					zIndex: 1
				}}
			>
				<ClipLoader color={'white'} size={100} />
			</div>
		);
	}
}

export default Spinner;
