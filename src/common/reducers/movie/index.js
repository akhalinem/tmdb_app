import { Routines } from '../../api';

const {
	getPopular,
	getTopRated,
	getUpcoming,
	getDetails,
	getCredits,
	getRecommendations,
	search
} = Routines.movie;

const initialState = {
	loading: undefined,
	credits: {
		id: undefined,
		cast: [],
		crew: []
	},
	recommendations: {
		page: undefined,
		results: []
	},
	details: {
		adult: undefined,
		backdrop_path: undefined,
		belongs_to_collection: undefined,
		budget: undefined,
		genres: [],
		homepage: undefined,
		id: undefined,
		imdb_id: undefined,
		original_language: undefined,
		original_title: undefined,
		overview: undefined,
		popularity: undefined,
		poster_path: undefined,
		production_companies: [],
		production_countries: [],
		release_date: undefined,
		revenue: undefined,
		runtime: undefined,
		spoken_languages: [],
		status: undefined,
		tagline: undefined,
		title: undefined,
		video: undefined,
		vote_average: undefined,
		vote_count: undefined
	},
	list: {
		page: undefined,
		total_results: undefined,
		total_pages: undefined,
		results: []
	}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case getPopular.TRIGGER:
		case getTopRated.TRIGGER:
		case getUpcoming.TRIGGER:
		case getDetails.TRIGGER:
		case getCredits.TRIGGER:
		case getRecommendations.TRIGGER:
		case search.TRIGGER:
			return {
				...state,
				loading: true
			};
		case getPopular.SUCCESS:
		case getTopRated.SUCCESS:
		case getUpcoming.SUCCESS:
		case search.SUCCESS:
			return {
				...state,
				loading: false,
				list: action.payload.response
			};
		case getDetails.SUCCESS:
			return {
				...state,
				loading: false,
				details: action.payload.response
			};
		case getCredits.SUCCESS:
			return {
				...state,
				loading: false,
				credits: action.payload.response
			};
		case getRecommendations.SUCCESS:
			return {
				...state,
				loading: false,
				recommendations: action.payload.response
			};
		default: {
			return state;
		}
	}
};
