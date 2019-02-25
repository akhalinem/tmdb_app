import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Routines } from 'common/api';
import { GridContainer } from '../../containers';
import { Pagination } from 'components';

import Filter from './filter';

class Home extends Component {
	state = {
		filter: 'popular',
		page: 1
	};

	handleGetMovies = (filter, page) => {
		switch (filter) {
			case 'popular':
				return this.props.getPopularMovies(page);
			case 'top_rated':
				return this.props.getTopRatedMovies(page);
			case 'upcoming':
				this.props.getUpcomingMovies(page);
		}
	};

	handlePagination = page => {
		const { filter } = this.state;
		this.setState({ page });
		this.handleGetMovies(filter, page);
	};

	handleFilterClick = filter => {
		const { page } = this.state;
		this.setState({ filter, page: 1 });
		this.handleGetMovies(filter, page);
	};

	componentDidMount() {
		const { filter, page } = this.state;
		this.handleGetMovies(filter, page);
	}

	render() {
		const { filter, page } = this.state;
		const { list } = this.props;

		return (
			<div id='home'>
				<Filter
					filter={filter}
					onClick={filter => this.handleFilterClick(filter)}
				/>
				<GridContainer data={list.data} />
				<div
					id='pagination'
					style={{ display: 'flex', justifyContent: 'center' }}
				>
					<Pagination
						page={page}
						onClick={page => this.handlePagination(page)}
					/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ movie }) => {
	// console.log('TTT', movie.list);
	const { list } = movie;
	return { list };
};

const mapDispatchToProps = dispatch => ({
	getPopularMovies: page => dispatch(Routines.movie.getPopular(page)),
	getTopRatedMovies: page => dispatch(Routines.movie.getTopRated(page)),
	getUpcomingMovies: page => dispatch(Routines.movie.getUpcoming(page))
});

Home = connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);

export default Home;
