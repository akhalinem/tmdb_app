export default api => {
	return {
		getDetails: id => {
			return api.get(`/person/${id}`);
		}
	};
};
