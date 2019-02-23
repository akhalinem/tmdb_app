import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';

// import { createBrowserHistory } from 'history';
// import { ConnectedRouter } from 'connected-react-router';
// import { PersistGate } from 'redux-persist/integration/react';
import createStore from 'common/createStore';
import { Provider } from 'react-redux';

import Routes from './routes';

// let history = createBrowserHistory();
const { store, persistor, history } = createStore();

ReactDOM.render(
	<Provider store={store}>
		{/* <PersistGate loading={null} persistor={persistor}> */}
		<Router history={history}>
			<Routes />
		</Router>
		{/* </PersistGate> */}
	</Provider>,
	document.getElementById('root')
);
