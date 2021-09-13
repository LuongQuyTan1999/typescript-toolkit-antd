import { lazy } from 'react';

const Auth = lazy(() => import('features/auth/Auth'));

export interface Router {
  path: string;
  exact: boolean;
  component: React.LazyExoticComponent<React.FC>;
}

export default [
  {
    path: '/',
    exact: true,
    component: Auth,
  },
];
