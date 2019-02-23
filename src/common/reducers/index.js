import { combineReducers } from 'redux';

import movie from './movie';
import person from './person';
import locales from './locales';

export default combineReducers({
	movie,
	person,
	locales
});
