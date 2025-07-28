export const getLocalStorage = (key: string) => {
  const res = localStorage.getItem(key);
  return res;
};
