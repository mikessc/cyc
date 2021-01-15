export default {
  hasKey: key => window.localStorage.key(key),
  getItem: key => {
    const value = typeof window !== 'undefined' ? window.localStorage.getItem(key) : '';

    if (typeof value !== 'string') {
      return value;
    }

    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  },
  removeItem: key => {
    if (typeof window !== 'undefined') window.localStorage.removeItem(key);
  },
  setItem: (key, value) => {
    if (typeof window !== 'undefined')
      window.localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value);
  }
};
