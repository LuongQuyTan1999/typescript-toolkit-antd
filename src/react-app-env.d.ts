/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ReactEnv extends ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    REACT_APP_API_URL: string;
  }

  interface Process {
    env: ReactEnv;
  }
}