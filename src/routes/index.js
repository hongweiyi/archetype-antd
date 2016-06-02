import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import Dashboard from '../components/Dashboard';
import NotFound from '../components/NotFound';

const Routes = ({ history }) =>
  <Router history={history}>
    <Route path="/" component={Dashboard} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="*" component={NotFound}/>
  </Router>;

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;
