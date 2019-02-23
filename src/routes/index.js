import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from 'layouts/mainLayout';
import { Home, Movie, Person, Search } from '../views';

export default () => {
	const routes = [
		{ path: '/', exact: true, component: Home },
		{ path: '/movie', component: Movie },
		{ path: '/person', component: Person },
		{ path: '/search', component: Search }
	];

	return (
		<Layout>
			<Switch>
				{routes.map((route, key) => (
					<Route
						key={key}
						path={route.path}
						component={route.component}
						exact={route.exact}
					/>
				))}
			</Switch>
		</Layout>
	);
};
