import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

import styles from './styles';
import locales from 'localize';

class ButtonGroup extends React.Component {
	state = {
		toggles: [
			{ label: 'Popular', type: 'popular', value: 1 },
			{ label: 'Top Rated', type: 'top_rated', value: 2 },
			{ label: 'Upcoming', type: 'upcoming', value: 3 }
		]
	};

	render() {
		const { classes, filter, onClick } = this.props;
		const { alignment, toggles } = this.state;
		// console.log('ButtonGroup');

		return (
			<ToggleButtonGroup
				className={classes.toggleContainer}
				style={{ backgroundColor: 'transparent' }}
				value={alignment}
				exclusive
			>
				{toggles.map((toggle, key) => {
					// console.log('TTT', locales.home.filter[toggle.type]);
					return (
						<ToggleButton
							key={key}
							value={toggle.value}
							onClick={() => onClick(toggle.type)}
							style={{
								color: 'white',
								border: '1px solid white',
								color: filter === toggle.type ? 'black' : 'white',
								backgroundColor: filter === toggle.type ? 'white' : 'black'
							}}
						>
							{locales.home.filter[toggle.type]}
						</ToggleButton>
					);
				})}
			</ToggleButtonGroup>
		);
	}
}

ButtonGroup.propTypes = {
	classes: PropTypes.object,
	filter: PropTypes.string,
	onClick: PropTypes.func
};

export default withStyles(styles)(ButtonGroup);
