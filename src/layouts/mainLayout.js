import React from 'react';
import { connect } from 'react-redux';
import { Header, Spinner } from 'components';
import locales from 'localize';

const setLocale = lang => ({
	type: 'SET_LOCALE',
	payload: { lang }
});

let layout = ({ children, loading, locale, setLanguage, ...rest }) => {
	// console.log('layout', children);
	locales.setLanguage(locale);

	return (
		<div id='main-layout' style={{ display: 'flex', flexDirection: 'column' }}>
			<Header setLocale={lang => setLanguage(lang)} />
			<div id='container' style={styles.container}>
				<Spinner loading={loading} />
				{children}
			</div>
		</div>
	);
};

const styles = {
	container: {
		display: 'flex',
		flex: 1,
		backgroundColor: '#141414'
	}
};

const mapStateToProps = ({ movie, person, locales }) => {
	console.log('TTT', person.loading);
	const loading = movie.loading || person.loading;
	return {
		locale: locales.lang,
		loading
	};
};
const mapDispatchToProps = dispatch => ({
	setLanguage: lang => dispatch(setLocale(lang))
});

layout = connect(
	mapStateToProps,
	mapDispatchToProps
)(layout);

export default layout;
