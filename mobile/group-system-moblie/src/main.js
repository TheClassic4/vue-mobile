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
const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

export default vm;
