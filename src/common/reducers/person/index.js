import { Routines } from '../../api';

const { getDetails } = Routines.person;

const initialState = {
	loading: undefined,
	details: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case getDetails.TRIGGER: {
			return {
				...state,
				loading: true
			};
		}
		case getDetails.SUCCESS:
			return {
				...state,
				loading: false,
				details: action.payload.response
			};
		default: {
			return state;
		}
	}
};
