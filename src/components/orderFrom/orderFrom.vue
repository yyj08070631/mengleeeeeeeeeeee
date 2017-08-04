<template>
    <div class="orderFrom-wrapper">
        <v-view class="route-item"></v-view>
        <!-- 头部 -->
        <div class="header">
            <div class="header-content">
                <h1 class="title">查看订单</h1>
                <a href="#search">
                    <img class="search" src="./search.png" />
                </a>
            </div>
        </div>
        <div class="content-wrapper item-cls">
            <a href="javascript:void(0)" class="order-title">
                <span class="title">我的订单</span>
                <router-link to="/allOrder">
                    <a href="javascript:;" class="content" >查看更多订单</a>
                </router-link>
                <img class="more" src="./more.png" />
            </a>
            <div class="order-content">
                <p class="noGoods" v-show="orderList.orderitem.length < 1">您还没有订单哦 :)</p>
                <div class="content-item content-item-top" v-for="(val,key) in orderList.orderitem">
                    <img class="product" :src="val.mainmap" />
                    <div class="product-message">
                        <span class="desc">{{val.name}}</span>
                        <p class="num">单价:{{val.price}}</p>
                        <p class="price">总价:￥{{val.price*val.number}}</p>
                    </div>
                    <div>
                        <span class="for-to-paid">{{goodsTypeArr[val.status].type}}</span>
                        <span class="orderPrice">数量：{{val.number}}</span>
                    </div>   
                    <div class="handle">
                        <router-link class="link" :to="{ path: goodsTypeArr[val.status].link1, query: { gid: val.id } }" >{{goodsTypeArr[val.status].btnInfo}}</router-link>
                    </div>
                    <div class="handle pos-left" v-if="val.status == 1 || val.status == 3">
                        <router-link class="link" :to="{ path: goodsTypeArr[val.status].link2, query: { gid: val.id } }" >{{goodsTypeArr[val.status].btnInfo2}}</router-link>
                    </div>
                </div>
                <div class="content-item content-item-top" v-for="(val,key) in moreData">
                    <img class="product" :src="val.mainmap" />
                    <div class="product-message">
                        <span class="desc">{{val.name}}</span>
                        <p class="num">单价:{{val.price}}</p>
                        <p class="price">总价:￥{{val.price*val.number}}</p>
                    </div>
                    <div>
                        <span class="for-to-paid">{{goodsTypeArr[val.status].type}}</span>
                        <span class="orderPrice">数量：{{val.number}}</span>
                    </div>
                    <div class="handle">
                        <router-link class="link" :to="{ path: goodsTypeArr[val.status].link1, query: { gid: val.id } }" >{{goodsTypeArr[val.status].btnInfo}}</router-link>
                    </div>
                    <div class="handle pos-left" v-if="val.status == 1 || val.status == 3">
                        <router-link class="link" :to="{ path: goodsTypeArr[val.status].link2, query: { gid: val.id } }" >{{goodsTypeArr[val.status].btnInfo2}}</router-link>
                    </div>
                </div>
            </div>
            <div class="order-content">
            </div>
            <a class="more-orderFrom" href="javascript:void(0)" @click="addPara()" v-show="orderList.orderitem.length > 0">{{goodsNode}}</a>
            <div class="line"></div>
            <a href="javascript:void(0)" class="order-title">
                <span class="title">我的收藏</span>
                <router-link to="/myCollect">
                    <a href="#myCollect" class="content">查看所有收藏</a>
                </router-link>
                <img class="more" src="./more.png" />
            </a>
        </div>
        <div class="swiper-pos">
            <p class="noCollect" v-if="orderList.collectitem.length < 1">没有任何收藏哦&nbsp;:)</p>
            <swiper :options="swiperOption" ref="mySwiper" style="width: 100%;height: 100%" v-if="orderList.collectitem.length > 0">
            <swiper-slide v-for="(val,key) in orderList.collectitem">
                <router-link :to="{path:'/goodDetail',query:{gid:val.id}}">  
                    <img :src="val.mainmap">
                </router-link> 
                <p>{{val.name}}</p>
                <p v-if="val.type === 1">￥{{val.price}}</p>
            </swiper-slide>
            <!-- 这是轮播的小圆点 -->
            <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <router-view></router-view>
    </div>
</template>
<script type="ecmascript-6">
import view from '../../components/view/view';
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    components: {
        'v-view': view,
        swiper,
        swiperSlide
    },
    ready() {

    },
    methods: {
        getDataFromBackend: function () {
            this.$http({
                method: 'get',
                url: global.Domain + '/Order/order',
                emulateJSON: true
            }).then(function (response) {
                this.orderList = response.body
            })
        },
        getMoreData: function () {
            this.$http({
                method: 'get',
                url: global.Domain + '/Order/ordmore?para='+this.para,
                emulateJSON: true
            }).then(function (response) {
                let moreData = response.body;
                if(moreData == 'err'){
                    this.goodsNode = "没有更多订单了"
                    this.para = this.para-1
                   return
                }else{
                    this.goodsNode = "查看更多订单"
                    moreData.orderitem.forEach((obj)=>{
                    this.moreData.push(obj)
                    })
                }
            })
        },
        addPara: function(){
            this.para++;
            this.getMoreData();
 
        },
    },
    data() {
        return {
            para: 0,
            goodsNode: '查看更多订单',
            orderList: [],
            moreData: [],
            para: 0,
            goodsTypeArr: [
                'err',
                {
                    btnInfo: '取消订单',
                    btnInfo2: '立即结账',
                    type: '待结账',
                    link1: '/goodDetail',
                    link2: '/buyGoods'
                },
                'err',
                {
                    btnInfo: '去评价',
                    btnInfo2: '再次购买',
                    type: '待收货',
                    link1: '/orderFrom/evaluate',
                    link2: '/goodDetail'
                },
                {
                    btnInfo: '再次购买',
                    type: '待评价',
                    link1: '/goodDetail'
                },
                {
                    btnInfo: '再次购买',
                    type: '交易成功',
                    link1: '/goodDetail'
                },
                'err',
                'err',
                {
                    btnInfo: '再次购买',
                    type: '订单取消',
                    link1: '/goodDetail',
                    link2:'/orderFrom'
                }
        
            ],
            swiperOption: {
                notNextTick: true,
                loop : false,
                paginationType: "bullets",
                pagination: '.swiper-pagination',
                paginationBulletRender: function (swiper, index, className) {
                    let width = ( isFinite(100/(parseInt(swiper.imagesLoaded / 2))) ? 100/(parseInt(swiper.imagesLoaded / 2)) : 100 ) + '%';
                    // console.log(width);
                    return '<span class="' + className + '"' + 'style="width:'+ width +'"' + '></span>';
                }
            }
        }
    },
    mounted() {
        this.$nextTick(function () {
            this.getDataFromBackend();
        })
    }
}

</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
mg-width = 1.125rem
width100 = 100%
  .orderFrom-wrapper
    margin-top: 1.0938rem
    padding-bottom: 1.3438rem
    width: 100%
    height: 100%
    background: #fff
    overflow-x: hidden
    .route-item
        footerCss()
    .header
        headerCss()
    .noGoods
        margin 20% 0
        font-size 0.4688rem
        text-align center
        color #333
     .item-cls
       position: relative   
       display: block
     .content-wrapper
        margin-left: 0.5rem
        float: left
        width: 100%
        height: 100%
        font-size: 0
        .order-title
            display: flex
            width: 100%
            height: 1.3125rem
            line-height: 1.3125rem
            border-bottom-1px(#e6e6e6)
            .title 
                flex 1
                float: left
                font-size: 0.375rem   
                color: #333
            .content
                flex 1
                display: block    
                float: right
                margin-right: 1.625rem
                font-size: 0.375rem
                color: #909090
                align-item flex-end
            .more 
                position: absolute
                right: 0.7813rem
                top: 50%
                margin-top: -0.1875rem  
                width: 0.375rem
                height: 0.375rem        
        .order-content
            width: 100%    
            .content-item-top
                height: 3.5rem
            .content-item-bottom
                height: 3.4375rem
            .content-item
                display: flex
                position: relative
                border-bottom-1px(#e6e6e6)           
                .product
                    display block
                    float: left
                    width: 1.625rem 
                    height: 1.625rem
                    margin: 0.5625rem 0.5625rem 0 0    
                .product-message
                    margin-top: 0.5rem
                    float: left
                    width: 5.25rem
                    line-height: 0.625rem
                    font-size: 0.375rem 
                    .desc
                        color: #333
                    .num
                        color: #909090
                    .price
                        color: #909090
                .for-to-paid
                    display: inline-block
                    margin: 0.5rem mg-width 0 0 
                    vertical-align: top
                    float: right
                    height: 0.6875rem
                    line-height: 0.6875rem
                    text-align: center
                    font-size: 0.375rem
                    color: #ea6aa2
                .orderPrice
                    display: inline-block
                    margin: 0 mg-width 0 0 
                    vertical-align: top
                    float: right
                    height: 0.6875rem
                    line-height: 0.6875rem
                    text-align: center
                    font-size: 0.375rem
                    color: #909090            
                .handle
                    display: block
                    position: absolute
                    right: mg-width
                    bottom: 0.5rem
                    width: 1.8438rem   
                    height: 0.5625rem
                    line-height: 0.5625rem
                    font-size: 0.3438rem
                    text-align: center
                    border-radius: 0.1563rem
                    color: #fff 
                    background: #ea6aa2     
                    .link
                        color: #fff
                .pos-left
                    margin-right: 2.0625rem                 
        .more-orderFrom
            display: block
            width: 100%
            height: 1.2188rem
            line-height: 1.2188rem
            font-size: 0.375rem
            text-align: center
            color: #ea6aa2
        .line
            margin-left: -0.5rem
            width: 100%
            height: 0.3438rem
            background: #f0f0f0  
    .swiper-pos 
        float: left 
        width: 100%
        height: 8.125rem      
        .noCollect
            margin-top 3.5938rem
            text-align: center
            font-size: 0.5rem
            color: #333
        .swiper-container
            position: relative
            height: 8.125rem !important
            .swiper-pagination
                left 0% !important
                width 100% !important
            .swiper-wrapper
                width: 50% !important  
                height: 5.4688rem
                margin: 0.3125rem auto
                .swiper-pagination-bullet
                img
                    width: 5.4063rem !important   
                    height: 5.4063rem !important
                p
                    margin-top: 0.3125rem 
                    width: 5.4063rem !important   
                    font-size: 0.3438rem   
                    text-align: center
            .swiper-pagination
                height: 0.0313rem  !important 
                background: #ccc
                bottom: 0 !important 
                margin 0 !important
                span
                    height: 0.0313rem
        .swiper-pagination-bullet
            margin 0 !important
            height 0.0156rem !important
        .swiper-pagination-bullet-active   
            height 0.0313rem !important      
                                 
</style>    

