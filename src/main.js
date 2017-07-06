import Vue from 'vue';
import vueRouter from 'vue-router';
import App from './App';
import goods from './components/goods/goods';
import home from './components/home/home';
import myCenter from './components/myCenter/myCenter';
import orderFrom from './components/orderFrom/orderFrom';
import goodDetail from './components/goodDetail/goodDetail';
import vueResource from 'vue-resource'
import { AlertPlugin, ToastPlugin } from 'vux'

Vue.use(vueResource)
Vue.use(vueRouter)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

const routes = [{
        path: '/goods',
        component: goods,
    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/myCenter',
        component: myCenter
    },
    {
        path: '/orderFrom',
        component: orderFrom
    },
    {
        path: '/goodDetail',
        component: goodDetail
    }
];
const router = new vueRouter({
    routes
})
new Vue({
    el: '#app',
    router: router,
    template: '<App/>',
    components: { App }
})