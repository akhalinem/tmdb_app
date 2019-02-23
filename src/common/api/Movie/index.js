export default api => {
	return {
		getPopular: page => {
			return api.get(`/movie/popular?page=${page}`);
		},
		getTopRated: page => {
			return api.get(`/movie/top_rated?page=${page}`);
		},
		getUpcoming: page => {
			return api.get(`/movie/upcoming?page=${page}`);
		},
		getDetails: id => {
			return api.get(`/movie/${id}`);
		},
		getCredits: id => {
			return api.get(`/movie/${id}/credits`);
		},
		getRecommendations: id => {
			return api.get(`/movie/${id}/recommendations`);
		},
		search: query => {
			return api.get(`/search/movie?query=${query}`);
		}
	};
};
