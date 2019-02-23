import { call, put, takeEvery } from 'redux-saga/effects';

import Routines from '../routines';

function* trigger(api, action) {
	const request = action.payload;

	try {
		yield put(Routines.getPopular.request());

		const response = yield call(api.movie.getPopular, request);

		yield put(
			Routines.getPopular.success({
				request,
				response: response.data
			})
		);
	} catch (e) {
		yield put(Routines.getPopular.failure(e));
	} finally {
		yield put(Routines.getPopular.fulfill());
	}
}

export default function*(api) {
	yield takeEvery(Routines.getPopular.TRIGGER, trigger, api);
}
