import React from 'react';
import Router from 'react-router';
import routes from './routes';
import createBrowserHistory from '../../node_modules/react-router/node_modules/history/lib/createBrowserHistory';

React.render(<Router history={createBrowserHistory()}>{routes}</Router>, document.getElementById('application'));