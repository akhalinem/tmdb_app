import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Routines } from 'common/api';
import { GridContainer } from '../../containers';
import { ButtonGroup, Pagination, Spinner } from 'components';

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
		const { list, loading } = this.props;

		return loading ? (
			<Spinner />
		) : (
			<div
				style={{
					flexGrow: 1,
					backgroundColor: '#141414'
				}}
			>
				<div
					id='toolbar'
					style={{ display: 'flex', justifyContent: 'flex-end' }}
				>
					<ButtonGroup
						filter={filter}
						onClick={filter => this.handleFilterClick(filter)}
					/>
				</div>
				<GridContainer data={list} />
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

const mapStateToProps = state => {
	const { list, loading, search } = state.movie;
	return { list, loading, search };
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
