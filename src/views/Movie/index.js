import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Routines } from '../../common/api';

import Banner from './banner';
import TopCasts from './topCasts';
import Recommendations from './recommendations';

class Movie extends Component {
	state = {};

	componentDidMount() {
		// console.log('Movie componentDidMount', this.props);
		const {
			getMovieDetails,
			getMovieCredits,
			getMovieRecommendations
		} = this.props;

		const { id } = this.props.history.location.state;
		window.scrollTo({ top: 0 });
		return [
			getMovieDetails(id),
			getMovieCredits(id),
			getMovieRecommendations(id)
		];
	}

	render() {
		const { details, credits, recommendations, history } = this.props;

		return (
			<div id='movie'>
				<Banner
					data={details.data}
					onClick={(path, params) => history.push(path, params)}
				/>
				<br />
				<TopCasts
					data={credits.data}
					onClick={(path, params) => history.push(path, params)}
				/>
				<div style={{ height: 100 }} />
				<Recommendations
					data={recommendations.data}
					onClick={params => [
						this.props.getMovieDetails(params.id),
						this.props.getMovieCredits(params.id),
						this.props.getMovieRecommendations(params.id),
						window.scrollTo({ top: 0 })
					]}
				/>
			</div>
		);
	}
}

const mapStateToProps = ({ movie }) => {
	const { details, credits, recommendations } = movie;
	return { details, credits, recommendations };
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
