import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/home/Home';
import NotFound from './components/NotFound';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="login" component={Login} />
    <Route path="home" component={Home} />
    <Route path="dashboard" component={Dashboard} />
    <Route path="*" component={NotFound} />
  </Route>
);
