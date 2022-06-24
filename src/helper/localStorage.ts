export const setLocal = (key: any, value: any) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getLocal = (key: any, fallback?: any) => {
  if (typeof localStorage !== 'undefined') {
    const result = localStorage.getItem(key);
    if (result && result !== 'undefined') {
      return JSON.parse(result);
    } else {
      return fallback ?? false;
    }
  }
};

export const clearLocal = (key: any) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(key);
  }
};
