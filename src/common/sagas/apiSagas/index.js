import Movie from 'common/api/Movie/sagas';
import Genre from 'common/api/Genre/sagas';

export default function sagas(api) {
	return [Movie(api), Genre(api)];
}
