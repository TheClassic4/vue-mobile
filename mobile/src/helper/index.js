export const isEmpty = (value) => {
  return value === null || value === undefined || value.trim() === '';
};
export const isEmptyPlainObject = (value) => {
  if (Object.prototype.toString.call(value) !== '[object Object]') {
    return false;
  }
  return Object.keys(value).length > 0;
};
//每隔三位加逗号
// export const formatNumber =(num)=>{
//   var num = (num || 0).toString();
//   var result = '';
//   while (num.length > 3) {
//       result = ',' + num.slice(-3) + result;
//       num = num.slice(0, num.length - 3);
//   }
//   if (num) { result = num + result; }
//   return result;
// }