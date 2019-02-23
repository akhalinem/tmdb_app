export default api => {
	return {
		getPopular: () => {
			return api.get('/movie/popular');
		},
		getDetails: id => {
			return api.get(`/movie/${id}`);
		},
		getCredits: id => {
			return api.get(`movie/${id}/credits`);
		},
		getRecommendations: id => {
			return api.get(`movie/${id}/recommendations`);
		},
		search: query => {
			return api.get(`search/movie?query=${query}`);
		}
	};
};
