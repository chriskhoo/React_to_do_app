import React from 'react';
import * as ReactRouter from 'react-router';
let Router = ReactRouter.Router;
let Route = ReactRouter.Route;
let IndexRoute = ReactRouter.IndexRoute;
let HashHistory = ReactRouter.hashHistory;

import Main from '../components/Main';
import Home from '../components/Home';
import DummyContainer from '../containers/DummyContainer';


let routes = (
  <Router history={HashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path='dummy' header='This is DUmmy' component={DummyContainer} />
    </Route>
  </Router>
);

export default routes;
