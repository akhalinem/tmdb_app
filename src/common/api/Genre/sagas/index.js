import get from './get';

export default function sagas(api) {
	return [get(api)];
}
