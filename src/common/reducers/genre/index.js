import { Routines } from '../../api';

const { get } = Routines.genre;

const initialState = {
	loading: undefined,
	error: undefined,
	list: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case get.TRIGGER: {
			return {
				...state,
				loading: true
			};
		}
		case get.SUCCESS: {
			return {
				...state,
				loading: false,
				list: action.payload.response
			};
		}
		default: {
			return state;
		}
	}
};
