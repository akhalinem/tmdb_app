import React from 'react';
import { ButtonGroup } from 'components';

const filter = ({ filter, onClick }) => {
	return (
		<div id='toolbar' style={{ display: 'flex', justifyContent: 'flex-start' }}>
			<ButtonGroup filter={filter} onClick={onClick} />
		</div>
	);
};

export default filter;
