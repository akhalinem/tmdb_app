import { call, put, takeEvery } from 'redux-saga/effects';

import Routines from '../routines';

function* trigger(api, action) {
	const request = action.payload;

	try {
		yield put(Routines.getRecommendations.request());

		const response = yield call(api.movie.getRecommendations, request);

		yield put(
			Routines.getRecommendations.success({
				request,
				response: response.data
			})
		);
	} catch (e) {
		yield put(Routines.getRecommendations.failure(e));
	} finally {
		yield put(Routines.getRecommendations.fulfill());
	}
}

export default function*(api) {
	yield takeEvery(Routines.getRecommendations.TRIGGER, trigger, api);
}
