import getDetails from './getDetails';

export default function sagas(api) {
	return [getDetails(api)];
}
