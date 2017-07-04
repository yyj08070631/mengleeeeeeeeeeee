import Vue from 'vue';
import vueRouter from 'vue-router';
import App from './App';
import goods from './components/goods/goods';
import home from './components/home/home';
import myCenter from './components/myCenter/myCenter';
import orderFrom from './components/orderFrom/orderFrom';
Vue.use(vueRouter);

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
    }
];
const router = new vueRouter({
    routes,
    linkActiveClass: 'active'
})
new Vue({
    el: '#app',
    router: router,
    template: '<App/>',
    components: { App }
})