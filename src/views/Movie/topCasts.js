import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { CardImage } from '../../components';

class TopCasts extends Component {
	render() {
		const { data, history } = this.props;
		console.log('topcast', this.props);

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
							Top Billed Cast
						</Typography>

						<Grid container>
							{data.cast.slice(0, 4).map((cast, key) => (
								<Grid key={key} item md={3}>
									<CardImage
										hasSubtitle
										subtitle1={cast.character}
										subtitle2={cast.name}
										image={cast.profile_path}
										onClick={() =>
											history.push(`/person/${cast.id}`, { id: cast.id })
										}
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

export default TopCasts;
