import React, { Component } from 'react';
import Moment from 'moment';
import { Grid, Typography } from '@material-ui/core';
import { CardImage } from 'components';

class Banner extends Component {
	handleGetReleaseDate(release_date, type) {
		if ((type = 'year')) {
			const year = release_date && Moment(release_date, 'YYYY-MM-DD').year();
			return year;
		}
	}

	// handleGetDuration(duration) {
	// 	console.log(duration);
	// 	let hours, minutes;
	// 	hours = parseInt(duration / 60, 10);
	// 	minutes = parseInt(duration % 60, 10);
	// 	console.log('hour, minutes', hours, minutes);
	// }

	render() {
		const { data, history } = this.props;
		console.log('banner render', this.props);
		return (
			<Grid
				id='banner'
				container
				style={{
					backgroundImage: `url(https://image.tmdb.org/t/p/w500${
						data.backdrop_path
					})`,
					backgroundSize: 'cover',
					width: '100%',
					height: 500
				}}
			>
				<div
					style={{
						backgroundColor: 'rgba(12, 40, 100, 0.3)',
						width: '100%',
						height: '100%'
					}}
				>
					<Grid item md={1} />
					<Grid item md={10}>
						<Grid
							container
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'center'
							}}
						>
							<Grid item md={3}>
								<CardImage
									image={data.poster_path}
									banner
									height={400}
									width='90%'
								/>
							</Grid>
							<Grid item md={9} style={{ backgroundColor: 'lighblue' }}>
								<div id='title'>
									<Typography
										component='title'
										variant='h4'
										style={{ color: 'white' }}
									>
										{data.title} (
										{this.handleGetReleaseDate(data.release_date, 'year')})
									</Typography>
								</div>
								<br />
								<div id='genres'>
									<Typography
										component='title'
										variant='h6'
										style={{ color: 'white' }}
									>
										Genres:
										{data &&
											data.genres.map((genre, key) => (
												<span
													key={key}
													style={{
														backgroundColor: 'blue',
														padding: 5,
														margin: '0 5px',
														borderRadius: 5,
														color: 'white',
														fontSize: 12
													}}
												>
													{genre.name}{' '}
												</span>
											))}
									</Typography>
								</div>
								<br />
								<div id='overview' style={{ maxWidth: '70%' }}>
									<Typography
										component='title'
										variant='h6'
										style={{ color: 'white' }}
									>
										Overview
									</Typography>
									<Typography component='p' style={{ color: 'white' }}>
										{data.overview}
									</Typography>
								</div>
								<br />
								<div id='duration'>
									<Typography
										component='title'
										variant='h6'
										style={{ color: 'white' }}
									>
										Duration
									</Typography>
									<Typography component='p' style={{ color: 'white' }}>
										{data.runtime}
									</Typography>
								</div>
								<br />
								{/* <div id='budjet'>
									<Typography
										component='title'
										variant='h6'
										style={{ color: 'white' }}
									>
										Budjet
									</Typography>
									<Typography component='p' style={{ color: 'white' }}>
										{data.budget}
									</Typography>
								</div>
								<br />
								<div id='revenue'>
									<Typography
										component='title'
										variant='h6'
										style={{ color: 'white' }}
									>
										Revenue
									</Typography>
									<Typography component='p' style={{ color: 'white' }}>
										{data.revenue}
									</Typography>
								</div> */}
							</Grid>
						</Grid>
					</Grid>
				</div>
			</Grid>
		);
	}
}

export default Banner;
