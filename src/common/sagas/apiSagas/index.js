import Movie from 'common/api/Movie/sagas';
import Person from 'common/api/Person/sagas';

export default function sagas(api) {
	return [Movie(api), Person(api)];
}
