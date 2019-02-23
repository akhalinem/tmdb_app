import getPopular from './getPopular';
import getDetails from './getDetails';
import getCredits from './getCredits';
import getRecommendations from './getRecommendations';
import search from './search';

export default function sagas(api) {
	return [
		getPopular(api),
		getDetails(api),
		getCredits(api),
		getRecommendations(api),
		search(api)
	];
}
