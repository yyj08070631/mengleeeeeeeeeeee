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
                <a href="#allOrder" class="content">查看全部订单</a>
                <img class="more" width=11 height=11 src="./more.png" />
            </a>
            <div class="order-content">
                <div class="content-item content-item-top" v-for="(val,key) in orderList.orderitem">
                    <img class="product" width=104 height=104 :src="val.mainmap" />
                    <div class="product-message">
                        <span class="desc">{{val.name}}</span>
                        <p class="num">单价:{{val.price}}</p>
                        <p class="price">总价:￥{{val.price*val.number}}</p>
                    </div>
                    <span class="for-to-paid">待付款</span>
                    <span class="orderPrice">数量：{{val.number}}</span>
                    <div class="handle">
                        <a class="link" href="javascript:void(0)">立即结账</a>
                    </div>
                    <div class="handle pos-left">
                        <a class="link" href="javascript:void(0)">取消订单</a>
                    </div>
                </div>
                <div class="content-item content-item-top" v-for="(val,key) in moreData.orderitem">
                    <img class="product" width=104 height=104 :src="val.mainmap" />
                    <div class="product-message">
                        <span class="desc">{{val.name}}</span>
                        <p class="num">单价:{{val.price}}</p>
                        <p class="price">总价:￥{{val.price*val.number}}</p>
                    </div>
                    <span class="for-to-paid">待付款</span>
                    <span class="orderPrice">数量：{{val.number}}</span>
                    <div class="handle">
                        <a class="link" href="javascript:void(0)">立即结账</a>
                    </div>
                    <div class="handle pos-left">
                        <a class="link" href="javascript:void(0)">取消订单</a>
                    </div>
                </div>
                <!-- <div class="content-item content-item-bottom">
                    <img class="product" src="./product01.png" />
                    <div class="product-message">
                        <span class="desc">圣雅琦 明眸亮莹眼部精华</span>
                        <p class="num">数量:</p>
                        <p class="price">总价:￥</p>
                    </div>
                    <span class="for-to-paid">待评价</span>
                    <span class="orderPrice">数量：1</span>
                    <div class="handle">
                        <a class="link" href="javascript:void(0)">再次购买</a>
                    </div>
                    <div class="handle pos-left">
                        <a class="link" href="javascript:void(0)">待评价</a>
                    </div>
                </div> -->
            </div>
            <a class="more-orderFrom" href="javascript:void(0)" @click="addPara()">查看更多订单</a>
            <div class="line"></div>
            <a href="javascript:void(0)" class="order-title">
                <span class="title">我的收藏</span>
                <router-link to="/myCollect">
                    <a href="#myCollect" class="content">查看所有收藏</a>
                </router-link>
                <img class="more" src="./more.png" />
            </a>
        </div>
        <swiper :options="swiperOption" ref="mySwiper" style="width: 100%;height: 100%">
            <swiper-slide v-for="(val,key) in orderList.collectitem">
                <!-- <router-link to="/goodDetail" v-if="dataApp.linkType == 'gid'">  -->
                <img :src="val.mainmap">
                <!-- </router-link> -->
                <!-- <router-link to="/offlineInfo" v-else-if="dataApp.linkType == 'aid'">  -->
                <!-- </router-link>  -->
                <p>{{val.name}}</p>
                <p v-if="val.type === 1">￥{{val.price}}</p>
            </swiper-slide>
            <!-- 这是轮播的小圆点 -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
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
        addPara: function(){
            this.para++;
            if(this.moreData!='err'){
                //  alert(this.moreData.orderitem+""+this.para)
                
            }          
        },
        getDataFromBackend: function () {
            this.$http({
                method: 'get',
                url: global.Domain + '/Order/order',
                emulateJSON: true
            }).then(function (response) {
                this.orderList = response.body
                //console.log(this.orderList)
            })
        },
        getMoreData: function () {
            this.$http({
                method: 'get',
                url: global.Domain + '/Order/ordmore?para='+this.para,
                emulateJSON: true
            }).then(function (response) {
                this.moreData = response.body;
                alert(this.moreData.orderitem.length)
            })
        }
    },
    data() {
        return {
            para: 0,
            len: 0,
            orderList: [],
            moreData: [],
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
            this.getMoreData();
        })
    }
}

</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
mg-width = 1.125rem
width100 = 100%
  .orderFrom-wrapper
    position: absolute
    top: 1.0938rem
    left: 0
    padding-bottom: 1.3438rem
    width: 100%
    height: 100%
    background: #fff
    overflow-x: hidden
    .route-item
        footerCss()
    .header
        headerCss()
     .item-cls
       position: relative   
     .content-wrapper
        width: 100%
        margin-left: 0.5rem
        font-size: 0
        .order-title
            display: block
            width: 100%
            height: 1.125rem
            line-height: 1.125rem
            border-bottom-1px(#e6e6e6)
            .title 
                float: left
                font-size: 0.3438rem   
                color: #333
            .content
                display: inline-block    
                float: right
                margin-right: 1.625rem
                font-size: 0.3438rem
                color: #909090
            .more 
                position: absolute
                right: 0.7813rem
                top: 50%
                margin-top: -0.1875rem  
                width: 0.375rem
                height: 0.375rem        
        .order-content
            width: 100%
            border-bottom-1px(#e6e6e6)        
            .content-item-top
                height: 4rem
            .content-item-bottom
                height: 3.4375rem
            .content-item
                position: relative
                border-bottom-1px(#e6e6e6)           
                .product
                    float: left
                    width: 1.625rem 
                    height: 1.625rem
                    margin: 0.5625rem 0.5625rem 0 0    
                .product-message
                    margin-top: 0.5rem
                    float: left
                    width: 5.25rem
                    line-height: 0.625rem
                    font-size: 0.3438rem 
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
                    font-size: 0.3438rem
                    color: #ea6aa2
                .orderPrice
                    display: inline-block
                    margin: 0 mg-width 0 0 
                    vertical-align: top
                    float: right
                    height: 0.6875rem
                    line-height: 0.6875rem
                    text-align: center
                    font-size: 0.3438rem
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
            font-size: 0.3438rem
            text-align: center
            color: #ea6aa2
        .line
            margin-left: -0.4688rem
            width: 100%
            height: 11px
            background: #f0f0f0         
    .swiper-container
        position: relative
        height: 8.125rem !important
        .swiper-wrapper
            width: 50% !important  
            height: 5.4688rem
            margin: 0.3125rem auto
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
            bottom: 0  
            span
                height: 0.0313rem
                                 
</style>    

