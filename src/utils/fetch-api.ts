import fetch from './axios-helper';
import { AxiosResponse } from 'axios'

function deleteData(url: string, optsHeader = {}): Promise<AxiosResponse> {
  return fetch.delete(url, {
    headers: {
      ...optsHeader,
    },
  });
}

function putData(url: string, data = {}, optsHeader = {}): Promise<AxiosResponse> {
  return fetch.put(url, data, {
    headers: {
      ...optsHeader,
    },
  });
}

function patchData(url: string, data = {}, optsHeader = {}): Promise<AxiosResponse> {
  return fetch.patch(url, data, {
    headers: {
      ...optsHeader,
    },
  });
}

const postData = (url: string, data = {}, optsHeader = {}): Promise<AxiosResponse> => {
  return fetch.post(url, data, {
    headers: {
      ...optsHeader,
    },
  });
};

function getData(url: string, optsHeader = {}, params: typeof Object): Promise<AxiosResponse> {
  // eslint-disable-next-line no-console
  return fetch.get(url, {
    headers: {
      ...optsHeader,
    },
    params,
  });
}

export { getData, putData, patchData, postData, deleteData };
