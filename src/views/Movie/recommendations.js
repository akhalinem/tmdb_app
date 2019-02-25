import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { CardImage } from '../../components';

class Recommendations extends Component {
	render() {
		const { data, onClick } = this.props;
		// console.log('recommendations', this.props);

		return (
			<Grid container id='top casts'>
				<Grid item md={1} />
				<Grid item md={10}>
					<Grid container>
						<Typography
							component='title'
							variant='h6'
							style={{ color: 'white' }}
						>
							Recommendations
						</Typography>
						<Grid container>
							{data.results.map((recommend, key) => (
								<Grid key={key} item md={3}>
									<CardImage
										image={recommend.poster_path}
										hasSubtitle
										onClick={() => onClick({ id: recommend.id })}
									/>
								</Grid>
							))}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		);
	}
}

export default Recommendations;
