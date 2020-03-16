import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vant from 'vant';
import 'vant/lib/index.css';
import '@/assets/styles/base.less';

Vue.use(Vant);

Vue.config.productionTip = false;
if (process.env.NODE_ENV === 'development') {
  const VConsole = require('vconsole');
  new VConsole();
}
Vue.filter('formatNumber', (num) => {
  if (num) {
    // split()将一个字符串分割成字符串数组 []
    var parts = num.toString().split(".");
    //   /,/g,''进行全局匹配
    //   ?=正向预查,包含3个数字,3个数字前面有字符 ?!负向预查,不包含一个数字的,后面没有字符,空格被替换为","
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  } else {
    return '0.0'
  }
});
const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

export default vm;
