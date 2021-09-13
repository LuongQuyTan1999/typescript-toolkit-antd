import { isEmpty as _isEmpty } from 'lodash';
import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useAppSelector } from 'app/hooks';
import { getData } from 'utils/local-storage-helper';
import Layout from './library/layout/index';
import routesUnauth from './routes/routesUnauth';
import { SMC_AUTH_TOKEN } from './utils/common';
const NotFound = lazy(() => import('features/not-found'));

// Type

interface RenderAppInterface {
  authenticated: boolean;
}

const DelayedFallback = () => {
  useEffect(() => {
    return () => {
      clearTimeout(100);
    };
  }, []);

  return <div>Loading...</div>;
};

const RenderApp = ({ authenticated }: RenderAppInterface) => {
  const appRoutes = routesUnauth;

  return (
    <Layout authenticated={authenticated}>
      <Switch>
        {appRoutes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={() => {
                return <Suspense fallback={<DelayedFallback />}>{React.createElement(route.component)}</Suspense>;
              }}
            />
          );
        })}
        <Suspense fallback={<DelayedFallback />}>
          <Route path="*" exact component={NotFound} />
        </Suspense>
      </Switch>
    </Layout>
  );
};

const App: React.FC = () => {
  const { entities } = useAppSelector((state) => state.authSlice);
  const token = getData(SMC_AUTH_TOKEN) || entities?.token || '';

  return (
    <Router>
      <RenderApp authenticated={_isEmpty(token) === false} />
    </Router>
  );
};

export default App;
