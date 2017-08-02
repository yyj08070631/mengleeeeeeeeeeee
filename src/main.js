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
import nearbyStoresAll from './components/nearbyStoresAll/nearbyStoresAll';
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
import addrEditReal from './components/addrEditReal/addrEditReal';
import allOrder from './components/allOrder/allOrder';
import evaluate from './components/evaluate/evaluate';
import myWallet from './components/myWallet/myWallet';
import myLoading from './components/myLoading';
import vueResource from 'vue-resource';
import jsonp from 'jsonp';
import { AlertPlugin, ToastPlugin, AjaxPlugin, XDialog } from 'vux'
import Vuex from 'vuex';
import AMap from 'vue-amap'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import vuexI18n from 'vuex-i18n';

Vue.use(Vuex)
const store = new Vuex.Store();

Vue.use(AMap)
Vue.use(vuexI18n.plugin, store)
    //Vue.use(Vuex)
Vue.use(VueAwesomeSwiper)
Vue.use(AjaxPlugin)
Vue.use(vueResource)
Vue.use(vueRouter)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

// 初始化vue-amap
AMap.initAMapApiLoader({
    // 申请的高德key
    key: 'cff70e3d1e0ff9e38fb1d82801838419',
    // 插件集合
    plugin: ['Scale', 'Geolocation']
})

const routes = [
    {
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
        component: orderFrom,
        children: [{
            path: '/orderFrom/evaluate',
            component: evaluate
        }]
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
        path: '/addrEditReal',
        component: addrEditReal
    },
    {
        path: '/allOrder',
        component: allOrder
    },
    {
        path: '/nearbyStoresAll',
        component: nearbyStoresAll
    },
    {
        path: '/myLoading',
        component: myLoading
    },
    {
        path: '/myWallet',
        component: myWallet
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

new Vue({
    el: '#app',
    router: router,
    template: '<App/>',
    components: { App }
})

// 页面加载显示loading
store.registerModule('vux', { // 名字自己定义
    state: {
        isLoading: false
    },
    mutations: {
        updateLoadingStatus(state, payload) {
            state.isLoading = payload.isLoading
        }
    }
})

// router.beforeEach((to, from, next) => {
//     // Vue.http({
//     //     method: 'post',
//     //     url: global.Domain + '/test/test',
//     //     emulateJSON: true
//     // }).then(function (response) {
//     //     let res = response.data
//     //     // console.log(res);
//     //     // res.app == 0
//     //     if (false) {
//     //         location.href = res.url
//     //         return
//     //     } else {
//     //         Store.state.ifLoading = false
//     //     }
//     // })
//     // next()
//     store.commit('updateLoadingStatus', { isLoading: true })
//     next()
// })
// router.afterEach((to, from, next) => {
//     // console.log(to.meta.title)
//     // if (to.meta) {
//     //     if (to.meta.title) {
//     //         document.title = to.meta.title
//     //     } else {
//     //         document.title = to.meta
//     //     }
//     //     // if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
//     //     //   this.iframe = '/favicon.ico' + Math.random()
//     //     // }
//     //     let ua = navigator.userAgent
//     //     // console.log(ua)
//     //     if (/ip(hone|od|ad)/i.test(ua)) {
//     //         var i = document.createElement('iframe')
//     //         // i.src = require('./commom/favicon.png')
//     //         i.style.display = 'none'
//     //         i.onload = function () {
//     //             setTimeout(function () {
//     //                 i.remove()
//     //             })
//     //         }
//     //         document.body.appendChild(i)
//     //     }
//     // }
//     store.commit('updateLoadingStatus', {isLoading: false})
// })
