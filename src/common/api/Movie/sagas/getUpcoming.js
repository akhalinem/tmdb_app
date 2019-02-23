import { call, put, takeEvery } from 'redux-saga/effects';

import Routines from '../routines';

function* trigger(api, action) {
	const request = action.payload;

	try {
		yield put(Routines.getUpcoming.request());

		const response = yield call(api.movie.getUpcoming, request);

		yield put(
			Routines.getUpcoming.success({
				request,
				response: response.data
			})
		);
	} catch (e) {
		yield put(Routines.getUpcoming.failure(e));
	} finally {
		yield put(Routines.getUpcoming.fulfill());
	}
}

export default function*(api) {
	yield takeEvery(Routines.getUpcoming.TRIGGER, trigger, api);
}
