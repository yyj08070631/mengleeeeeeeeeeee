import Vue from 'vue';
import vueRouter from 'vue-router';
import App from './App';
import { remInit } from './commom/remInit.js'
import goods from './components/goods/goods';
import home from './components/home/home';
import myCenter from './components/myCenter/myCenter';
import orderFrom from './components/orderFrom/orderFrom';
import goodDetail from './components/goodDetail/goodDetail';
import myTeam from './components/myTeam/myTeam';
import settings from './components/settings/settings';
import myQRcode from './components/myQRcode/myQRcode';
import integral from './components/integral/integral';
import goodsData from './components/goodsData/goodsData';
import offLineMsg from './components/offLineMsg/offLineMsg';
import digest from './components/digest/digest';
import bill from './components/bill/bill';
import titleComputed from './components/titleComputed/titleComputed';
import expandComputed from './components/expandComputed/expandComputed';
import vueResource from 'vue-resource'
import { AlertPlugin, ToastPlugin } from 'vux'

Vue.use(vueResource)
Vue.use(vueRouter)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

const routes = [{
        path: '/goods',
        component: goods
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
    },
    {
        path: '/settings',
        component: settings
    },
    {
        path: '/myTeam',
        component: myTeam
    },
    {
        path: '/myQRcode',
        component: myQRcode
    },
    {
        path: '/integral',
        component: integral
    },
    {
        path: '/goodsData',
        component: goodsData
    },
    {
        path: '/offLineMsg',
        component: offLineMsg
    },
    {
        path: '/digest',
        component: digest
    },
    {
        path: '/bill',
        component: bill
    },
    {
        path: '/titleComputed',
        component: titleComputed
    },
    {
        path: '/expandComputed',
        component: expandComputed
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