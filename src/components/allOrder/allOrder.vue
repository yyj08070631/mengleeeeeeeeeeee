<template>
    <div class="allOrder-wrapper">
        <!-- 头部 -->
        <!-- <v-header></v-header> -->
        <div class="order-content-wrapper item-cls">
            <p class="noGoods" v-show="orderList.orderitem.length < 1">您还没有订单哦 :)</p>
            <div class="order-content">
                <div class="content-item content-item-top" v-for="(val,key) in orderList.orderitem">
                    <img class="product" :src="val.mainmap" />
                    <div class="product-message">
                        <span class="desc">{{val.name}}</span>
                        <p class="num">单价:￥{{val.price}}</p>
                        <p class="price">总价:￥{{val.price*val.number}}</p>
                    </div>
                    <div>
                        <span class="for-to-paid">{{goodsTypeArr[val.status].type}}</span>
                        <span class="orderPrice">数量：{{val.number}}</span>
                    </div>
                    <div class="handle">
                        <router-link class="link" :to="{ path: goodsTypeArr[val.status].link1, query: { gid: 11 } }" >{{goodsTypeArr[val.status].btnInfo}}</router-link>
                    </div>
                    <div class="handle pos-left" v-if="val.status==1 || val.status == 3 || val.status == 2">
                        <router-link class="link" :to="{ path: goodsTypeArr[val.status].link2, query: { gid: 11 } }" >{{goodsTypeArr[val.status].btnInfo2}}</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="ecmascript-6">
import view from '../../components/view/view';
// import header from '../../components/header/header';
import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux';

export default {
    components: {
        Swiper,
        SwiperItem,
        GroupTitle,
        XButton,
        Divider,
        'v-view': view,
        // 'v-header': header
    },
    ready() {

    },
    methods: {
        getDataFromBackend: function() {
            this.$http({
                method: 'get',
                url: global.Domain + '/Order/ordlist',
                emulateJSON: true
            }).then(function (response) {
                this.orderList = response.body
                console.log(this.orderList)
            })
        }
    },
    data() {
        return {
            orderList: [],
            goodsTypeArr: [
                'err',
                {
                    btnInfo: '取消订单',
                    btnInfo2: '立即结账',
                    type: '待结账',
                    link1: '/goodDetail',
                    link2: '/buyGoods'
                },
                {
                    btnInfo: '去评价',
                    btnInfo2: '再次购买',
                    type: '待收货',
                    link1: '/orderFrom/evaluate',
                    link2: '/goodDetail'
                },
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
        }
    },
    mounted(){
        this.$nextTick(function(){
            this.getDataFromBackend()
        })
    }
}

</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
.allOrder-wrapper
    width: 100%
    height: 100%
    background: #f0f0f0
    .route-item
        footerCss()
    .header
        headerCss()
    .item-cls
        position: relative
    .noGoods
        padding 20% 0
        background-color #fff
        font-size fs + 0.0313rem
        text-align center
        color #333
    .order-content-wrapper
        width: 100%
        height 100%
        font-size: 0
        .order-title
            display: block
            width: 100%
            height: 1.125rem
            line-height: 1.125rem
            border-bottom 1px solid #e0e0e0
            .title 
                float: left
                font-size fs - 0.0938rem
                color: #333
            .content
                display: inline-block    
                float: right
                margin-right: 1.625rem
                font-size: fs - 0.0938rem
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
                height: 3.5rem
            .content-item-bottom
                height: 3.4375rem
            .content-item
                display flex
                position: relative
                border-bottom 1px solid #e0e0e0
                background-color #fff
                .product
                    float: left
                    width: 1.625rem 
                    height: 1.625rem
                    margin: 0.5625rem 0.5625rem 0 0.5rem    
                .product-message
                    margin-top: 0.5rem
                    float: left
                    width: 5.25rem
                    line-height: 0.625rem
                    font-size: fs - 0.0938rem
                    .desc
                        color: #333
                    .num
                        color: #909090
                    .price
                        color: #909090
                .for-to-paid
                    display: inline-block
                    margin: 0.5rem 0.5rem 0 0 
                    vertical-align: top
                    float: right
                    height: 0.6875rem
                    line-height: 0.6875rem
                    text-align: center
                    font-size: fs - 0.0938rem
                    color: #ea6aa2
                .orderPrice
                    display: inline-block
                    margin: 0 0.5rem 0 0 
                    vertical-align: top
                    float: right
                    height: 0.6875rem
                    line-height: 0.6875rem
                    text-align: center
                    font-size: fs - 0.0938rem
                    color: #909090            
                .handle
                    display: block
                    position: absolute
                    right: 0.5rem
                    bottom: 0.5rem
                    width: 1.8438rem   
                    height: 0.5625rem
                    line-height: 0.5625rem
                    font-size: fs - 0.0938rem
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
            font-size: fs - 0.0938rem
            text-align: center
            color: #ea6aa2
        .line
            margin-left: -0.4688rem
            width: 100%
            height: 11px
            background: #f0f0f0
</style>    

