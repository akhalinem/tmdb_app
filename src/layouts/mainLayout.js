import React, { useState } from 'react';
import { Header } from 'components';

import locales from 'localize';

const layout = ({ children, ...rest }) => {
	console.log('layout');

	const [locale, setLocale] = useState('en');
	locales.setLanguage(locale);

	return (
		<div id='main-layout'>
			<Header
				setLocale={lang => {
					setLocale(lang);
					locales.setLanguage(locale);
				}}
			/>
			<div
				id='container'
				style={{
					display: 'flex',
					flex: 1,
					backgroundColor: '#141414'
				}}
			>
				{children}
			</div>
		</div>
	);
};

export default layout;
