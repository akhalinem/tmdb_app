import React from 'react';
import { ClipLoader } from 'react-spinners';

const Spinner = ({ loading }) =>
	loading ? (
		<div
			style={{
				position: 'fixed',
				backgroundColor: 'rgba(0,0,0,0.7)',
				width: window.screen.width,
				height: window.screen.height,
				display: 'flex',
				flex: 1,
				justifyContent: 'center',
				paddingTop: '10%',
				zIndex: 1
			}}
		>
			<ClipLoader color='white' size={100} />
		</div>
	) : null;

export default Spinner;
