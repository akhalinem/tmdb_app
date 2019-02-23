import { all } from 'redux-saga/effects';
import { routinePromiseWatcherSaga } from 'redux-saga-routines';

import { Api } from '../api';

import apiSagas from './apiSagas';

export default function*() {
	const sagas = [...apiSagas(Api), routinePromiseWatcherSaga];
	yield all(...sagas);
}
