import { Routines } from '../../api';

const { getDetails } = Routines.person;

const initialState = {
	loading: false,
	error: false,
	success: false,
	details: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case getDetails.TRIGGER: {
			console.log('person getDetails TRIGGER');
			return {
				...state,
				loading: true
			};
		}
		case getDetails.SUCCESS: {
			console.log('person getDetails SUCCESS');
			return {
				...state,
				loading: false,
				details: action.payload.response
			};
		}
		default: {
			return state;
		}
	}
};
