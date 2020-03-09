import axios from 'axios';
import vm from '@/main';
import { getLoginInfo } from '@/helper/user';

const http = axios.create({
  // baseURL: 'http://172.21.245.25:8081',
  timeout: 10000,
  headers: { 'X-Requested-With': 'XMLHttpRequest' }
});
http.interceptors.request.use(
  (config) => {
    // const { token } = getLoginInfo();
    const token = JSON.parse(sessionStorage.getItem('TOKEN'));
      config.params.memberName = store.state.pageStore.currentVal || 'mina';
    token && (config.headers.token = token);
    return config;
  },
  error => {
    vm.$toast('请求异常');
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    const { status, data } = response;
    if (status === 200) {
      if (data.isError === false) {
        return response.data;
      }
      vm.$toast(response.error);
      return Promise.reject(response);
    }
    return Promise.reject(response);
  },
  error => {
    console.dir(error);
    const { status } = error.response;
    handleErrorStatus(status);
    const message = (error.response && error.response.data.error.message) ? error.response.data.error.message : '网络异常';
    vm.$toast(message);
    return Promise.reject(error.response);
  }
);
export default http;

const handleErrorStatus = (status) => {
  if (status === 401) {
    localStorage.clear();
    vm.$router.push('/login');
  }
};
