import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Wrapper from '../layouts/wrapper';
import { Home, Movie, Person, Search } from '../views';

import { Header } from '../components';

const routes = [
	{ path: '/', exact: true, component: Home },
	{ path: '/movie', component: Movie },
	{ path: '/person', component: Person },
	{ path: '/search', component: Search }
];

export default () => {
	return (
		<Wrapper>
			<Header />
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
		</Wrapper>
	);
};
