import { call, put, takeEvery } from 'redux-saga/effects';

import Routines from '../routines';

function* trigger(api, action) {
	const request = action.payload;

	try {
		yield put(Routines.getCredits.request());

		const response = yield call(api.movie.getCredits, request);

		yield put(
			Routines.getCredits.success({
				request,
				response: response.data
			})
		);
	} catch (e) {
		yield put(Routines.getCredits.failure(e));
	} finally {
		yield put(Routines.getCredits.fulfill());
	}
}

export default function*(api) {
	yield takeEvery(Routines.getCredits.TRIGGER, trigger, api);
}
