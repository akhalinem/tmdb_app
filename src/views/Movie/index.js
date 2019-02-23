import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Routines } from '../../common/api';
import { Spinner } from 'components';

import Banner from './banner';
import TopCasts from './topCasts';
import Recommendations from './recommendations';

class Movie extends Component {
	componentDidMount() {
		console.log('Mover componentDidMount', this.props);
		const {
			getMovieDetails,
			getMovieCredits,
			getMovieRecommendations
		} = this.props;

		const { id } = this.props.history.location.state;

		getMovieDetails(id);
		getMovieCredits(id);
		getMovieRecommendations(id);
	}

	render() {
		const { loading, details, credits, recommendations, history } = this.props;

		return loading ? (
			<Spinner />
		) : (
			<div style={{ flexGrow: 1, backgroundColor: '#141414' }}>
				<Banner data={details} />
				<br />
				<TopCasts data={credits} />
				<div style={{ height: 100 }} />
				<Recommendations data={recommendations} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { loading, details, credits, recommendations } = state.movie;
	return { loading, details, credits, recommendations };
};
const mapDispatchToProps = dispatch => {
	const { getDetails, getCredits, getRecommendations } = Routines.movie;
	return {
		getMovieDetails: id => dispatch(getDetails(id)),
		getMovieCredits: id => dispatch(getCredits(id)),
		getMovieRecommendations: id => dispatch(getRecommendations(id))
	};
};

Movie = connect(
	mapStateToProps,
	mapDispatchToProps
)(Movie);

export default Movie;
