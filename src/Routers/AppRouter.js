import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Header from '../Components/Header';
import Dashboard from '../Components/Dashboard';
import Page_2 from '../Components/Page_2';
import NotFoundPage from '../Components/NotFoundPage';

export const history = createBrowserHistory();

/* history prop is passing down to Search component through Header component.
Then they pass to Dashboard and used for the visibility of Seciton 1 or 2.
Also they used to route to the right page. */

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header {...history} />
      <Switch>
        <Route path="/" render={props => (<Dashboard {...props.location.state} />)} exact={true} />
        <Route path="/page_2" component={Page_2} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;