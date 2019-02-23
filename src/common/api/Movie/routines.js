import { createRoutine } from 'redux-saga-routines';

export default {
	getPopular: createRoutine('GET_POPULAR_MOVIES'),
	getTopRated: createRoutine('GET_TOP_RATED_MOVIES'),
	getUpcoming: createRoutine('GET_UPCOMING_MOVIES'),
	getDetails: createRoutine('GET_MOVIE_DETAILS'),
	getCredits: createRoutine('GET_MOVIE_CREDITS'),
	getRecommendations: createRoutine('GET_MOVIE_RECOMMENDATIONS'),
	search: createRoutine('SEARCH_MOVIES')
};
