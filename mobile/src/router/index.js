import Vue from 'vue';
import VueRouter from 'vue-router';
import Vant from 'vant';
import lazyLoading from '@/router/lazyLoading';
import { getLoginInfo } from '@/helper/user';

Vue.use(Vant);
Vue.use(VueRouter);

const vm = new Vue();
const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {//登录
    path: '/login',
    name: 'login',
    component: lazyLoading('login')
  },
  {//概括
    path: '/home',
    name: 'home',
    component: lazyLoading('home')
  },
  
  { //项目战略
    path:'/projectStrategy',
    name: 'projectStrategy',
    component: lazyLoading('projectStrategy')
  },
  { //产品
    path:'/product',
    name: 'product',
    component: lazyLoading('product')
  },{
    //财务/员工
    path: '/financialStaff',
    name: 'financialStaff',
    component: lazyLoading('financialStaff')
  },
];

const router = new VueRouter({
  routes
});

// 登录校验
router.beforeEach((to, from, next) => {
  // if (!getLoginInfo().token && to.path !== '/login') {
  //   // vm.$toast('请先登录');
  //   return next('/login');
  // }
   next();
});

router.afterEach((to, from) => {
  document.getElementById('app').scrollIntoView();
});

export default router;
