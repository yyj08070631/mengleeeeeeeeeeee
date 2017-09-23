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
import myTeamIndirect from './components/myTeamIndirect/myTeamIndirect';
import myLoading from './components/myLoading';
import vueResource from 'vue-resource';
import jsonp from 'jsonp';
import { base64 } from 'vux';
import { AlertPlugin, ToastPlugin, AjaxPlugin, XDialog } from 'vux'
import Vuex from 'vuex';
import AMap from 'vue-amap'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import vuexI18n from 'vuex-i18n';
import { InfiniteScroll } from 'mint-ui';
import { dateFormat } from 'vux';
import { WechatPlugin } from 'vux';
// import VueViewload from 'vue-viewload';

// 图片懒加载插件
// Vue.use(VueViewload, {
//     defaultPic: 'http://img.zcool.cn/community/01b97c55f131e432f875a132a7fbc6.gif',
//     errorPic: 'http://a0.att.hudong.com/77/31/20300542906611142174319458811.jpg',
//     threshold: 0,
//     effectFadeIn: true,
//     callback: function(ele, src) {
//         console.log('load complete')
//     }
// });
const FastClick = require('fastclick')
FastClick.attach(document.body)
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

const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/goods',
        component: function (resolve) {
            require(['./components/goods/goods.vue'], resolve)
        },
        meta: { title: '商品分类' }
    },
    {
        path: '/home',
        component: function (resolve) {
            require(['./components/home/home.vue'], resolve)
        },
        meta: { title: '美丽探索' }
    },
    {
        path: '/myCenter',
        component: function (resolve) {
            require(['./components/myCenter/myCenter.vue'], resolve)
        },
        meta: { title: '个人中心' }
    },
    {
        path: '/orderFrom',
        component: function (resolve) {
            require(['./components/orderFrom/orderFrom.vue'], resolve)
        },
        children: [{
            path: '/orderFrom/evaluate',
            component: evaluate
        }],
        meta: { title: '我的订单' }
    },
    {
        path: '/header',
        component: header
    },
    {
        path: '/goodDetail',
        component: function (resolve) {
            require(['./components/goodDetail/goodDetail.vue'], resolve)
        },
        meta: { title: '商品详情' }
    },
    {
        path: '/settings',
        component: function (resolve) {
            require(['./components/settings/settings.vue'], resolve)
        },
        meta: { title: '个人设置' }
    },
    {
        path: '/myTeam',
        component: function (resolve) {
            require(['./components/myTeam/myTeam.vue'], resolve)
        },
        meta: { title: '我的团队' }
    },
    {
        path: '/myQRcode',
        component: function (resolve) {
            require(['./components/myQRcode/myQRcode.vue'], resolve)
        },
        meta: { title: '我的二维码' }
    },
    {
        path: '/integral',
        component: function (resolve) {
            require(['./components/integral/integral.vue'], resolve)
        },
        meta: { title: '我的积分' }
    },
    {
        path: '/goodsData',
        component: function (resolve) {
            require(['./components/goodsData/goodsData.vue'], resolve)
        },
        meta: { title: '商品参数' }
    },
    {
        path: '/offlineInfo',
        component: function (resolve) {
            require(['./components/offlineInfo/offlineInfo.vue'], resolve)
        },
        meta: { title: '门店信息' }
    },
    {
        path: '/digest',
        component: function (resolve) {
            require(['./components/digest/digest.vue'], resolve)
        },
        meta: { title: '服务信息' }
    },
    {
        path: '/bill',
        component: function (resolve) {
            require(['./components/bill/bill.vue'], resolve)
        },
        meta: { title: '我的账单' }
    },
    {
        path: '/titleComputed',
        component: function (resolve) {
            require(['./components/titleComputed/titleComputed.vue'], resolve)
        },
        meta: { title: '头衔统计' }
    },
    {
        path: '/expandComputed',
        component: function (resolve) {
            require(['./components/expandComputed/expandComputed.vue'], resolve)
        },
        meta: { title: '拓展统计' }
    },
    {
        path: '/imageText',
        component: function (resolve) {
            require(['./components/imageText/imageText.vue'], resolve)
        },
        meta: { title: '图文详情' }
    },
    {
        path: '/nearbyStores',
        component: function (resolve) {
            require(['./components/nearbyStores/nearbyStores.vue'], resolve)
        },
        meta: { title: '附近门店' }
    },
    {
        path: '/goodsClassify',
        component: function (resolve) {
            require(['./components/goodsClassify/goodsClassify.vue'], resolve)
        },
        meta: { title: '商品列表' }
    },
    {
        path: '/teamComputed',
        component: function (resolve) {
            require(['./components/teamComputed/teamComputed.vue'], resolve)
        },
        meta: { title: '团队统计' }
    },
    {
        path: '/subscribe',
        component: function (resolve) {
            require(['./components/subscribe/subscribe.vue'], resolve)
        },
        meta: { title: '我的预约' }
    },
    {
        path: '/subscribeNow',
        component: function (resolve) {
            require(['./components/subscribeNow/subscribeNow.vue'], resolve)
        },
        meta: { title: '预约详情' }
    },
    // {
    //     path: '/search',
    //     component: search
    // },
    {
        path: '/buyGoods',
        component: function (resolve) {
            require(['./components/buyGoods/buyGoods.vue'], resolve)
        },
        meta: { title: '订单确认' }
    },
    {
        path: '/myCollect',
        component: function (resolve) {
            require(['./components/myCollect/myCollect.vue'], resolve)
        },
        meta: { title: '我的收藏' }
    },
    {
        path: '/cart',
        component: function (resolve) {
            require(['./components/cart/cart.vue'], resolve)
        },
        meta: { title: '购物袋' }
    },
    {
        path: '/addrManage',
        component: function (resolve) {
            require(['./components/addrManage/addrManage.vue'], resolve)
        },
        meta: { title: '收件信息' }
    },
    {
        path: '/addrEdit',
        component: function (resolve) {
            require(['./components/addrEdit/addrEdit.vue'], resolve)
        },
        meta: { title: '新建收货地址' }
    },
    {
        path: '/addrEditReal',
        component: function (resolve) {
            require(['./components/addrEditReal/addrEditReal.vue'], resolve)
        },
        meta: { title: '编辑收货地址' }
    },
    // {
    //     path: '/allOrder',
    //     component: allOrder
    // },
    {
        path: '/nearbyStoresAll',
        component: function (resolve) {
            require(['./components/nearbyStoresAll/nearbyStoresAll.vue'], resolve)
        },
        meta: { title: '所有门店' }
    },
    {
        path: '/myLoading',
        component: function (resolve) {
            require(['./components/myLoading.vue'], resolve)
        }
    },
    {
        path: '/myWallet',
        component: function (resolve) {
            require(['./components/myWallet/myWallet.vue'], resolve)
        },
        meta: { title: '我的钱包' }
    },
    {
        path: '/payResult',
        component: function (resolve) {
            require(['./components/payResult/payResult.vue'], resolve)
        },
        meta: { title: '支付结果' }
    },
    {
        path: '/myCenterHelp',
        component: function (resolve) {
            require(['./components/myCenterHelp/myCenterHelp.vue'], resolve)
        },
        meta: { title: '获得帮助' }
    },
    {
        path: '/integralHelp',
        component: function (resolve) {
            require(['./components/integralHelp/integralHelp.vue'], resolve)
        },
        meta: { title: '等级特权' }
    },
    {
        path: '/offlineInfoMap',
        component: function (resolve) {
            require(['./components/offlineInfoMap/offlineInfoMap.vue'], resolve)
        },
        meta: { title: '门店定位' }
    },
    {
        path: '/searchResult',
        component: function (resolve) {
            require(['./components/searchResult/searchResult.vue'], resolve)
        },
        meta: { title: '搜索结果' }
    },
    // {
    //     path: '/offlineMapSilence',
    //     component: offlineMapSilence
    // },
    {
        path: '/myCenterCopyTxt',
        component: function (resolve) {
            require(['./components/myCenterCopyTxt/myCenterCopyTxt.vue'], resolve)
        }
    },
    {
        path: '/myTeamIndirect',
        component: function (resolve) {
            require(['./components/myTeamIndirect/myTeamIndirect.vue'], resolve)
        },
        meta: { title: '直属会员' }
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

// 当前url
const urlNow = document.location.href;
// 每次页面加载执行（授权在此）
router.beforeEach((to, from, next) => {
    // Change doc title
    document.title = to.meta.title || '梦乐城'
    // store.commit('updateLoadingStatus', { isLoading: true });
    // console.log(getSearchString(pid));
    // 去掉 hash 模式中 url 的 # ，请求后台进行重定向处理 (分享)
    // let uri = urlNow;
    // let uriSplit = uri.split('#');
    // let uriBase = base64.encode(uriSplit[1]);
    // let uriRes = uriSplit[0] + '?surl=' + uriBase;
    // 授权
    Vue.http.post(
        global.Domain + '/index/test',
        {
            // uri: uriRes
        },
        {
            emulateJSON: true
        }).then(response => {
            let res = response.data
            // console.log(res);
            // res.app == 0
            if (res.app == 0) {
                // alert(res.url);
                location.href = res.url
                return
            } else {
                store.commit('updateLoadingStatus', {isLoading: false})
            }
        })
    // Vue.http({
    //     method: 'get',
    //     url: global.Domain + '/index/test?uri=' + addURLParam(urlNow, 'logo', '==tPtcNLZARXEuvDhRSFGkQX'),
    //     emulateJSON: true
    // }).then(function(response) {
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
    // });
    // console.log(store.state.isLoading)
    Vue.http({
        method: 'get',
        url: 'http://go.zs-mmall.com/dream/index.php/Api/uid',
        emulateJSON: true
    }).then(function(response) {
        let res = response.body;
        // console.log(res);
        Vue.wechat.ready(() => {
            Vue.wechat.onMenuShareAppMessage({
                title: '梦乐城',
                desc: '',
                link: 'http://go.zs-mmall.com/dream/index.php/Home/Index/test/surl/' + base64.encode(addURLParam(document.location.href, 'logo', res.logo)),
                imgUrl: res.img,
                success: function(res) {
                    // console.log(res)
                },
                cancel: function(res) {
                    // console.log(res)
                }
            });
            Vue.wechat.onMenuShareTimeline({
                title: '梦乐城',
                link: 'http://go.zs-mmall.com/dream/index.php/Home/Index/test/surl/' + base64.encode(addURLParam(document.location.href, 'logo', res.logo)),
                imgUrl: res.img,
                success: function(res) {
                    // console.log(res)
                },
                cancel: function(res) { 
                    // console.log(res)
                }
            });
        });
    })
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
global.Domain = 'http://go.zs-mmall.com/dream/index.php/Home'

new Vue({
    el: '#app',
    store,
    router: router,
    template: '<App/>',
    components: { App }
})

// jssdk config
Vue.http({
    method: 'get',
    url: global.Domain + '/Jssdk/sign?url=' + urlNow,
    emulateJSON: true
}).then(function(response) {
    let data = response.body
    // console.log(data)
    Vue.wechat.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来
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
        // console.log(res);
    });
});
// 全局分享配置
function addURLParam(url, name, value) {
    // 检验请求URL中是否有 "?" ，若无则用 "?" 添加查询字符串，若有则用 "&" 进行拼接
    url += (url.indexOf("?") == -1 ? "?" : "&");
    // 将查询字符串转换为URL格式
    url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
    return url;
}