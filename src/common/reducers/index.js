import { combineReducers } from 'redux';

import movie from './movie';
import person from './person';

export default combineReducers({
	movie,
	person
});
