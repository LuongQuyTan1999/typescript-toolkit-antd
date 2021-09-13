const storeData = (data: any, key: string): void => {
  if (!window.localStorage || !window.JSON || !key) {
    return;
  }

  window.localStorage.setItem(key, JSON.stringify(data));
};

const getData = (key: string): undefined | string => {
  if (!window.localStorage || !window.JSON || !key) {
    return;
  }
  const item = window.localStorage.getItem(key);

  if (!item) {
    return;
  }

  return JSON.parse(item);
};

const removeData = (key: string): void => {
  if (!window.localStorage || !window.JSON || !key) {
    return;
  }
  window.localStorage.removeItem(key);
};

const removeAllData = (): void => {
  if (!window.localStorage || !window.JSON) {
    return;
  }
  window.localStorage.clear();
};

export { storeData, getData, removeData, removeAllData };
