import vm from '@/main';

export const getLoginInfo = () => {
  return localStorage.getItem('loginInfo') ? JSON.parse(localStorage.getItem('loginInfo')) : {};
};
export const goLogin = () => {
  localStorage.clear();
  vm.$router.push('/login');
};
