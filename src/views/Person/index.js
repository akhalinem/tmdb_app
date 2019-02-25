import React from 'react';
import { connect } from 'react-redux';
import { Routines } from 'common/api';

import { Grid, Typography } from '@material-ui/core';
import { CardImage } from 'components';

class Person extends React.Component {
	// componentDidMount() {
	// 	const { id } = this.props.history.location.state;
	// 	// console.log('Person componentDidMount', id);
	// 	this.props.getPersonDetails(id);
	// }

	render() {
		// console.log('PERSON render', this.props);
		const { details } = this.props;

		return (
			<div>
				<Grid container style={{ paddingTop: 20 }}>
					<Grid item md={1} />
					<Grid item md={3}>
						<CardImage height={400} width='100%' />
					</Grid>
					<Grid item md={6}>
						<div id='details' style={{ margin: '15px 0' }}>
							<div id='title'>
								<Typography
									component='title'
									variant='h4'
									style={{ color: 'white' }}
								>
									Name
								</Typography>
							</div>
							<br />
							<br />
							<div id='birthday'>
								<Typography
									component='title'
									variant='h6'
									style={{ color: 'white' }}
								>
									Birthday
								</Typography>
								<Typography
									component='title'
									variant='subtitle2'
									style={{ color: 'white' }}
								>
									1956-10-04
								</Typography>
							</div>
							<br />
							<div id='place_of_birth'>
								<Typography
									component='title'
									variant='h6'
									style={{ color: 'white' }}
								>
									Place of Birth
								</Typography>
								<Typography
									component='title'
									variant='subtitle2'
									style={{ color: 'white' }}
								>
									Vienna, Austria
								</Typography>
							</div>
							<br />
							<div id='biography'>
								<Typography
									component='title'
									variant='h6'
									style={{ color: 'white' }}
								>
									Biography
								</Typography>
								<Typography
									component='title'
									variant='subtitle2'
									style={{ color: 'white' }}
								>
									Christoph Waltz (born 4 October 1956) is an Austrian actor who
									also holds German citizenship. He received international
									acclaim for his portrayal of SS Colonel Hans Landa in the 2009
									film Inglourious Basterds, for which he won the Best Actor
									Award at the Cannes Film Festival and the BAFTA, Golden Globe
									and Screen Actors Guild Award for Best Supporting Actor in
									2009 and the Academy Award for Best Supporting Actor in 2010.
								</Typography>
							</div>
						</div>
						<div id='photos' style={{ marginTop: 70 }}>
							<div id='photos_title'>
								<Typography
									component='title'
									variant='h5'
									style={{ color: 'white' }}
								>
									Photos
								</Typography>
							</div>
							<Grid container>
								{[1, 2, 3, 4, 5, 6].map((item, key) => (
									<Grid key={key} item md={3}>
										<CardImage width='60%' height={200} />
									</Grid>
								))}
							</Grid>
						</div>
					</Grid>
				</Grid>
				<Grid container>
					<Grid item md={1} />
					<Grid item md={10}>
						<Typography
							component='h4'
							variant='title'
							style={{ color: 'white' }}
						>
							Known By
						</Typography>
						<br />
						<Grid container>
							{[1, 2, 3, 4, 5].map((item, key) => (
								<Grid key={key} item md={3}>
									<CardImage width='100%' />
								</Grid>
							))}
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
	}
}

const mapStateToProps = ({ person }) => {
	const { details } = person;
	return { details };
};

const mapDispatchToProps = dispatch => ({
	getPersonDetails: id => dispatch(Routines.person.getDetails(id))
});

Person = connect(
	mapStateToProps,
	mapDispatchToProps
)(Person);
export default Person;
