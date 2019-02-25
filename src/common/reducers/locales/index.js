const initialState = {
	lang: 'en'
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'SET_LOCALE': {
			return action.payload;
		}
		default:
			return state;
	}
};
