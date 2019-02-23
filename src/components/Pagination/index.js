import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

import styles from './styles';

class Pagination extends React.Component {
	state = {
		paginations: [
			{ label: '1', page: 1 },
			{ label: '2', page: 2 },
			{ label: '3', page: 3 },
			{ label: '4', page: 4 },
			{ label: '5', page: 5 },
			{ label: '6', page: 6 },
			{ label: '7', page: 7 }
		]
	};

	render() {
		const { classes, page, onClick } = this.props;

		let paginations = [];
		if (page < 4) paginations = this.state.paginations;
		else {
			for (let i = page - 3; i <= page + 3; i++) {
				paginations.push({ label: i.toString(), page: i });
			}
		}
		console.log('page', page);
		return (
			<ToggleButtonGroup
				className={classes.paginationContainer}
				style={{ backgroundColor: 'transparent' }}
				exclusive
			>
				{paginations.map((item, key) => (
					<ToggleButton
						key={key}
						value={item.page}
						onClick={() => onClick(item.page)}
						style={{
							color: page === item.page ? 'black' : 'white',
							backgroundColor: page === item.page ? 'white' : 'black',
							border: '1px solid white'
						}}
					>
						{item.label}
					</ToggleButton>
				))}
			</ToggleButtonGroup>
		);
	}
}

Pagination.propTypes = {
	classes: PropTypes.object,
	page: PropTypes.number,
	onClick: PropTypes.func
};

export default withStyles(styles)(Pagination);
