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
import digest from './components/digest/digest';
import bill from './components/bill/bill';
import titleComputed from './components/titleComputed/titleComputed';
import expandComputed from './components/expandComputed/expandComputed';
import teamComputed from './components/teamComputed/teamComputed';
import nearbyStores from './components/nearbyStores/nearbyStores';
import imageText from './components/imageText/imageText';
import goodsClassify from './components/goodsClassify/goodsClassify';
import offlineInfo from './components/offlineInfo/offlineInfo';
import subscribe from './components/subscribe/subscribe';
import subscribeNow from './components/subscribeNow/subscribeNow';
import search from './components/search/search';
import buyGoods from './components/buyGoods/buyGoods';
import myCollect from './components/myCollect/myCollect';
import cart from './components/cart/cart';
import addrManage from './components/addrManage/addrManage';
import addrEdit from './components/addrEdit/addrEdit';
import allOrder from './components/allOrder/allOrder';
import vueResource from 'vue-resource';
import jsonp from 'jsonp';
import { AlertPlugin, ToastPlugin, AjaxPlugin } from 'vux'
import { XDialog } from 'vux'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import Vuex from 'vuex'
import store from './vuex/store'

Vue.use(Vuex)
Vue.use(VueAwesomeSwiper)
Vue.use(AjaxPlugin)
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
    path: '/offlineInfo',
    component: offlineInfo
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
},
{
    path: '/imageText',
    component: imageText
},
{
    path: '/nearbyStores',
    component: nearbyStores
},
{
    path: '/goodsClassify',
    component: goodsClassify
},
{
    path: '/teamComputed',
    component: teamComputed
},
{
    path: '/subscribe',
    component: subscribe
},
{
    path: '/subscribeNow',
    component: subscribeNow
},
{
    path: '/search',
    component: search
},
{
    path: '/buyGoods',
    component: buyGoods
},
{
    path: '/myCollect',
    component: myCollect
},
{
    path: '/cart',
    component: cart
},
{
    path: '/addrManage',
    component: addrManage
},
{
    path: '/addrEdit',
    component: addrEdit
},
{
    path: '/allOrder',
    component: allOrder
}
];


const router = new vueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});

// 定义全局变量
global.Domain = 'http://dde.dgxinn.cn/dream/index.php/Home'

// // 页面切换显示loading
// // 首先，注册一个module来保存状态
// const store = new Vuex.Store({}) // 这里你可能已经有其他 module

// store.registerModule('vux', { // 名字自己定义
//     state: {
//         isLoading: false
//     },
//     mutations: {
//         updateLoadingStatus(state, payload) {
//             state.isLoading = payload.isLoading
//         }
//     }
// });
// // 然后使用vue-router的beforeEach和afterEach来更改loading状态
// router.beforeEach(function (to, from, next) {
//   store.commit('updateLoadingStatus', {isLoading: true})
//   next()
// })

// router.afterEach(function (to) {
//   store.commit('updateLoadingStatus', {isLoading: false})
// })

new Vue({
    el: '#app',
    router: router,
    template: '<App/>',
    components: { App }
})