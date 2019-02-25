import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { CardButton } from '../../components';

import styles from './styles';

class GridContainer extends Component {
	render() {
		const { data } = this.props;

		return (
			<Grid container spacing={16}>
				{data.results.map((movie, key) => (
					<Grid key={key} item md={3}>
						<CardButton
							data={{
								id: movie.id,
								vote: movie.vote,
								image: movie.poster_path,
								title: movie.title
							}}
						/>
					</Grid>
				))}
			</Grid>
		);
	}
}

GridContainer = withStyles(styles)(GridContainer);
GridContainer.propTypes = {
	classes: PropTypes.object,
	onClick: PropTypes.func
};
export default GridContainer;
