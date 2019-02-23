import locales from 'react-localization';

let strings = new locales({
	en: {
		header: {
			title: 'The Movie'
		},
		home: {
			filter: {}
		},
		movie: {
			banner: {},
			topRated: {},
			remmondations: {}
		},
		person: {}
	},
	ru: {
		header: {
			title: 'Кино'
		},
		home: {
			filter: {}
		},
		movie: {
			banner: {},
			topRated: {},
			remmondations: {}
		},
		person: {}
	}
});

export default strings;
