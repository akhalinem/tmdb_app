import TokenStorage from '../TokenStorage';

const baseURL = 'https://api.themoviedb.org/3/';

export default {
	apisauce: {
		baseURL,
		headers: {
			'Content-Type': 'application/json'
		},
		params: {
			api_key: '337f338ffc9eae3e5378cc87107d0a13'
		}
	}
};
