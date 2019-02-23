import { call, put, takeEvery } from 'redux-saga/effects';

import Routines from '../routines';

function* trigger(api, action) {
	const request = action.payload;

	try {
		yield put(Routines.search.request());

		const response = yield call(api.movie.search, request);

		yield put(
			Routines.search.success({
				request,
				response: response.data
			})
		);
	} catch (e) {
		yield put(Routines.search.failure(e));
	} finally {
		yield put(Routines.search.fulfill());
	}
}

export default function*(api) {
	yield takeEvery(Routines.search.TRIGGER, trigger, api);
}
