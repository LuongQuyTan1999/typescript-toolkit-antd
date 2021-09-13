import React from 'react';
// import * as animationData from './animate.json';
// import Lottie from 'react-lottie';
import './index.modules.scss';
import { useTranslation } from 'react-i18next';

const NotFound: React.FC = () => {
  const { t } = useTranslation();
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData.default,
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice'
  //   }
  // };

  return (
    <div className="wrapper">
      <div className="title">404</div>
      {/* <Lottie
        isClickToPauseDisabled
        options={defaultOptions}
        height={340}
        width={500}
        // isStopped={false}
        // isPaused={false}
      /> */}
      <div className="description">{t('Page not found')}!</div>
    </div>
  );
};

export default NotFound;
