import { AsyncStorage } from 'AsyncStorage';

export default {
	get: () => {
		return AsyncStorage.getItem('token').then(result => {
			if (!result) {
				throw new Error('token error');
			}

			return result;
		});
	},

	set: value => {
		return AsyncStorage.setItem('token', value);
	}
};
