import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import LoginComponent from './Login';

const Auth: React.FC = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${match.path}`} component={LoginComponent} />
    </Switch>
  );
};

export default Auth;
