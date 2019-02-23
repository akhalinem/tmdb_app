import { combineReducers } from 'redux';

import movie from './movie';
import genre from './genre';

export default combineReducers({
	movie,
	genre
});
