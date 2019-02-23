import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Routines } from 'common/api';
import { GridContainer } from '../../containers';

class Home extends Component {
	componentDidMount() {
		this.props.getPopularMovies();
	}

	render() {
		const { list, loading } = this.props;
		return loading ? (
			<div>
				<h1>Loading...</h1>
			</div>
		) : (
			<div style={{ flexGrow: 1, backgroundColor: '#141414' }}>
				<GridContainer data={list} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { list, loading, search } = state.movie;
	return { list, loading, search };
};

const mapDispatchToProps = dispatch => ({
	getPopularMovies: () => dispatch(Routines.movie.getPopular())
});

Home = connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);

export default Home;
