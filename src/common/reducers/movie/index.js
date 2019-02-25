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
	loading: false,
	credits: {
		loading: false,
		error: false,
		success: undefined,
		data: {
			id: undefined,
			cast: [],
			crew: []
		}
	},
	recommendations: {
		loading: false,
		error: false,
		success: undefined,
		data: {
			page: undefined,
			results: []
		}
	},
	details: {
		loading: false,
		error: false,
		success: undefined,
		data: {
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
		}
	},
	list: {
		loading: false,
		error: false,
		success: undefined,
		data: {
			page: undefined,
			total_results: undefined,
			total_pages: undefined,
			results: []
		}
	}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case getPopular.TRIGGER:
		case getTopRated.TRIGGER:
		case getUpcoming.TRIGGER:
		case search.TRIGGER:
			return {
				...state,
				list: {
					...state.list,
					loading: true
				}
			};
		case getDetails.TRIGGER:
			return {
				...state,
				details: {
					...state.details,
					loading: true
				}
			};
		case getCredits.TRIGGER:
			return {
				...state,
				credits: {
					...state.credits,
					loading: true
				}
			};
		case getRecommendations.TRIGGER:
			return {
				...state,
				recommendations: {
					...state.recommendations,
					loading: true
				}
			};
		case getPopular.SUCCESS:
		case getTopRated.SUCCESS:
		case getUpcoming.SUCCESS:
		case search.SUCCESS:
			return {
				...state,
				list: {
					loading: false,
					data: action.payload.response
				}
			};
		case getDetails.SUCCESS:
			return {
				...state,
				details: {
					...state.details,
					loading: false,
					success: true,
					data: action.payload.response
				}
			};
		case getCredits.SUCCESS:
			return {
				...state,
				credits: {
					...state.credits,
					loading: false,
					success: true,
					data: action.payload.response
				}
			};
		case getRecommendations.SUCCESS:
			return {
				...state,
				recommendations: {
					...state.recommendations,
					success: true,
					data: action.payload.response
				}
			};
		default: {
			const { list, credits, details } = state;
			const loading = list.loading || credits.loading || details.loading;
			return {
				...state,
				loading
			};
		}
	}
};
