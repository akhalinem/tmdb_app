import locales from 'react-localization';

let strings = new locales({
	en: {
		header: {
			search: 'Search for a movie, tv show, person...',
			title: 'The Movie'
		},
		home: {
			filter: {
				popular: 'Popular',
				top_rated: 'Top Rated',
				upcoming: 'Upcoming'
			}
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
			search: 'Найти фильм, сериал, актера',
			title: 'Кино'
		},
		home: {
			filter: {
				popular: 'Актуальные',
				top_rated: 'По оценкам',
				upcoming: 'Скоро'
			}
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
