export default api => {
	return {
		get: () => {
			return api.get('/genre/movie/list');
		}
	};
};
