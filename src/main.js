import Vue from 'vue';
import vueRouter from 'vue-router';
import App from './App';
import { remInit } from './commom/remInit.js'
import goods from './components/goods/goods';
import home from './components/home/home';
import myCenter from './components/myCenter/myCenter';
import orderFrom from './components/orderFrom/orderFrom';
import header from './components/header/header';
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
import payResult from './components/payResult/payResult';
import myWallet from './components/myWallet/myWallet';
import myCenterHelp from './components/myCenterHelp/myCenterHelp';
import integralHelp from './components/integralHelp/integralHelp';
import myCenterCopyTxt from './components/myCenterCopyTxt/myCenterCopyTxt';
import offlineInfoMap from './components/offlineInfoMap/offlineInfoMap';
import searchResult from './components/searchResult/searchResult';
import offlineMapSilence from './components/offlineMapSilence/offlineMapSilence';
import myLoading from './components/myLoading';
import vueResource from 'vue-resource';
import jsonp from 'jsonp';
import { AlertPlugin, ToastPlugin, AjaxPlugin, XDialog } from 'vux'
import Vuex from 'vuex';
import AMap from 'vue-amap'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import vuexI18n from 'vuex-i18n';
import { InfiniteScroll } from 'mint-ui';
import { WechatPlugin } from 'vux'


Vue.use(WechatPlugin)
Vue.use(InfiniteScroll);
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        isLoading: false
    },
    mutations: {
        updateLoadingStatus(state, payload) {
            state.isLoading = payload.isLoading
        }
    }
});

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

Vue.directive('title', {
    inserted: function(el, binding) {
        document.title = el.dataset.title
    }
})

// jssdk
// Vue.wechat.config({
//     debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
//     appId: '', // 必填，公众号的唯一标识
//     timestamp: , // 必填，生成签名的时间戳
//     nonceStr: '', // 必填，生成签名的随机串
//     signature: '',// 必填，签名，见附录1
//     jsApiList: [] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
// });

const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/goods',
        component: goods,
        meta: { title: '商品分类' }
    },
    {
        path: '/home',
        component: home,
        meta: { title: '美丽探索' }
    },
    {
        path: '/myCenter',
        component: myCenter,
        meta: { title: '个人中心' }
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
        path: '/header',
        component: header
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
    // {
    //     path: '/search',
    //     component: search
    // },
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
        component: cart,
        meta: { title: '购物袋' }
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
    // {
    //     path: '/allOrder',
    //     component: allOrder
    // },
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
    },
    {
        path: '/payResult',
        component: payResult
    },
    {
        path: '/myCenterHelp',
        component: myCenterHelp
    },
    {
        path: '/integralHelp',
        component: integralHelp
    },
    {
        path: '/offlineInfoMap',
        component: offlineInfoMap
    },
    {
        path: '/searchResult',
        component: searchResult
    },
    // {
    //     path: '/offlineMapSilence',
    //     component: offlineMapSilence
    // },
    {
        path: '/myCenterCopyTxt',
        component: myCenterCopyTxt
    }
];

const router = new vueRouter({
    routes,
    // mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});

// 获取url对应查询字段的值
function getSearchString(key) {
    // 获取URL中?之后的字符
    var str = location.search;
    str = str.substring(1,str.length);

    // 以&分隔字符串，获得类似name=xiaoli这样的元素数组
    var arr = str.split("&");
    var obj = new Object();

    // 将每一个数组元素以=分隔并赋给obj对象    
    for(var i = 0; i < arr.length; i++) {
        var tmp_arr = arr[i].split("=");
        obj[decodeURIComponent(tmp_arr[0])] = decodeURIComponent(tmp_arr[1]);
    }
    return obj[key];
}

router.beforeEach((to, from, next) => {
    // Change doc title
    document.title = to.meta.title || '梦乐城'
    // store.commit('updateLoadingStatus', { isLoading: true });
    // console.log(getSearchString(pid));
    // // if(Vue.route.query){}
    // 授权
    // Vue.http({
    //     method: 'post',
    //     url: global.Domain + '/index/test',
    //     emulateJSON: true
    // }).then(function (response) {
    //     let res = response.data
    //     // console.log(res);
    //     // res.app == 0
    //     if (res.app == 0) {
    //         // alert(res.url);
    //         location.href = res.url
    //         return
    //     } else {
    //         store.commit('updateLoadingStatus', {isLoading: false})
    //     }
    // })
    // console.log(store.state.isLoading)
    next()
})
router.afterEach((to, from, next) => {
    // console.log(to.meta.title)
    // if (to.meta) {
    //     if (to.meta.title) {
    //         document.title = to.meta.title
    //     } else {
    //         document.title = to.meta
    //     }
    //     // if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
    //     //   this.iframe = '/favicon.ico' + Math.random()
    //     // }
    //     let ua = navigator.userAgent
    //     // console.log(ua)
    //     if (/ip(hone|od|ad)/i.test(ua)) {
    //         var i = document.createElement('iframe')
    //         // i.src = require('./commom/favicon.png')
    //         i.style.display = 'none'
    //         i.onload = function () {
    //             setTimeout(function () {
    //                 i.remove()
    //             })
    //         }
    //         document.body.appendChild(i)
    //     }
    // }
    // console.log(store.state.isLoading)
})

// 定义全局变量
global.Domain = 'http://dde.dgxinn.cn/dream/index.php/Home'

new Vue({
    el: '#app',
    store,
    router: router,
    template: '<App/>',
    components: { App }
})

// jssdk config
const urlNow = document.location.href;// 当前url
Vue.http({
    method: 'get',
    url: global.Domain + '/Index/sign?url=' + urlNow,
    emulateJSON: true
}).then(function(response) {
    let data = response.body
    Vue.wechat.config({
        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来
        appId: data.sdkitem.appId, // 必填，公众号的唯一标识
        timestamp: data.sdkitem.timestamp, // 必填，生成签名的时间戳
        nonceStr: data.sdkitem.nonceStr, // 必填，生成签名的随机串data.sdkitem.nonceStr
        signature: data.sdkitem.signature,// 必填，签名，见附录1
        jsApiList: [
            "onMenuShareTimeline",
            "onMenuShareAppMessage"
        ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });
    Vue.wechat.error(function(res) {
        console.log(res);
    });
})