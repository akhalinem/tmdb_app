import { Routines } from '../../api';

const {
	getPopular,
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
	},
	search: {
		query: ''
	}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case getPopular.TRIGGER:
			return {
				...state,
				loading: true
			};
		case getPopular.SUCCESS:
			return {
				...state,
				loading: false,
				list: action.payload.response
			};
		case getDetails.TRIGGER:
			return {
				...state,
				loading: true
			};
		case getDetails.SUCCESS:
			return {
				...state,
				loading: false,
				details: action.payload.response
			};
		case getCredits.TRIGGER:
			return {
				...state,
				loading: true
			};
		case getCredits.SUCCESS:
			return {
				...state,
				loading: false,
				credits: action.payload.response
			};
		case getRecommendations.TRIGGER:
			return {
				...state,
				loading: true
			};
		case getRecommendations.SUCCESS:
			return {
				...state,
				loading: false,
				recommendations: action.payload.response
			};
		case search.TRIGGER: {
			return {
				...state,
				loading: true
			};
		}
		case search.SUCCESS: {
			return {
				...state,
				loading: false,
				list: action.payload.response
			};
		}
		default: {
			return state;
		}
	}
};
