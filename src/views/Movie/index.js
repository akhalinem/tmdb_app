import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Routines } from '../../common/api';

import Banner from './banner';
import TopCasts from './topCasts';
import Recommendations from './recommendations';

class Movie extends Component {
	componentDidMount() {
		const {
			getMovieDetails,
			getMovieCredits,
			getMovieRecommendations,
			details
		} = this.props;

		getMovieDetails(details.id);
		getMovieCredits(details.id);
		getMovieRecommendations(details.id);
	}

	render() {
		const { loading, details, credits, recommendations, history } = this.props;

		return loading ? (
			<div>
				<h1>Loading...</h1>
			</div>
		) : (
			<div style={{ flexGrow: 1, backgroundColor: '#141414' }}>
				<Banner data={details} history={history} />
				<br />
				<TopCasts data={credits} history={history} />
				<br />
				<br />
				<br />
				<Recommendations data={recommendations} history={history} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { loading, popular, details, credits, recommendations } = state.movie;
	return { loading, popular, details, credits, recommendations };
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
