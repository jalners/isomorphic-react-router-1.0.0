import React from 'react';
import { IndexRoute, Route, Router } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import About from './components/About';

var routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='about' component={About} />    
  </Route>
);

module.exports = routes;