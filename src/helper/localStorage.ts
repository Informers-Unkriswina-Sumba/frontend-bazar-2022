export const setLocal = (key: any, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocal = (key: any, fallback?: any) => {
  const result = localStorage.getItem(key);
  if (result && result !== 'undefined') {
    return JSON.parse(result);
  } else {
    return fallback ?? false;
  }
};

export const clearLocal = (key: any) => {
  localStorage.removeItem(key);
};
