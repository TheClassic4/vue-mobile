export const isEmpty = (value) => {
  return value === null || value === undefined || value.trim() === '';
};
export const isEmptyPlainObject = (value) => {
  if (Object.prototype.toString.call(value) !== '[object Object]') {
    return false;
  }
  return Object.keys(value).length > 0;
};
