import { call, put, takeEvery } from 'redux-saga/effects';

import Routines from '../routines';

function* trigger(api, action) {
	const request = action.payload;

	try {
		yield put(Routines.getTopRated.request());

		const response = yield call(api.movie.getTopRated, request);

		yield put(
			Routines.getTopRated.success({
				request,
				response: response.data
			})
		);
	} catch (e) {
		yield put(Routines.getTopRated.failure(e));
	} finally {
		yield put(Routines.getTopRated.fulfill());
	}
}

export default function*(api) {
	yield takeEvery(Routines.getTopRated.TRIGGER, trigger, api);
}
