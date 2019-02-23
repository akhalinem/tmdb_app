import getPopular from './getPopular';
import getTopRated from './getTopRated';
import getUpcoming from './getUpcoming';
import getDetails from './getDetails';
import getCredits from './getCredits';
import getRecommendations from './getRecommendations';
import search from './search';

export default function sagas(api) {
	return [
		getPopular(api),
		getTopRated(api),
		getUpcoming(api),
		getDetails(api),
		getCredits(api),
		getRecommendations(api),
		search(api)
	];
}
