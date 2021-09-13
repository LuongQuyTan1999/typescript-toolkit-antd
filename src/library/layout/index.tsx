import React from 'react';
import { SMC_AUTH_TOKEN } from 'utils/common';
import { getData } from 'utils/local-storage-helper';
import './index.modules.scss';

interface Props {
  authenticated: boolean;
  children: React.ReactNode;
}

const Layout = ({ authenticated, children }: Props): JSX.Element => {
  const token = getData(SMC_AUTH_TOKEN);

  if (authenticated && token) {
    return <div className="">Main component</div>;
  }

  return <div className="auth-layout">{children}</div>;
};

export default Layout;
