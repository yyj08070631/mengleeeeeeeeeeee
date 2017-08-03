<template>
    <div class="orderFrom-wrapper">
        <!--头部  -->
        <div class="header">
            <div class="header-content border-bottom-1px">
                <a href="javascript:history.back(-1)" class="goBack">
				    <img src="./arrow_left.png" height="16">
				    <span>返回</span>
			    </a>
                <h1 class="title">查看全部订单</h1>
                <a href="#search"><img class="search" src="./search.png"/></a>
            </div>
        </div>
        <div class="order-content-wrapper item-cls">
            <p class="noGoods" v-show="orderList.orderitem.length < 1">您还没有订单哦 :)</p>
            <div class="order-content">
                <div class="content-item content-item-top" v-for="(val,key) in orderList.orderitem">
                    <img class="product" width=104 height=104 :src="val.mainmap" />
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
                        <router-link class="link" :to="{path:'/goodDetail',query:{gid:11}}" >{{goodsTypeArr[val.status].btnInfo}}</router-link>
                    </div>
                    <div class="handle pos-left" v-if="val.status==1 || val.status == 3">
                        <a class="link" href="javascript:void(0)">{{goodsTypeArr[val.status].btnInfo2}}</a>
                    </div>
                </div>
            </div>
        </div>
        <!--头部  -->
    </div>
</template>
<script type="ecmascript-6">
import view from '../../components/view/view';
import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux';

export default {
    components: {
        Swiper,
        SwiperItem,
        GroupTitle,
        XButton,
        Divider,
        'v-view': view
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
                    link: ''
                },
                'err',
                {
                    btnInfo: '去评价',
                    btnInfo2: '再次购买',
                    type: '待收货',
                    link: ''
                },
                {
                    btnInfo: '再次购买',
                    type: '待评价',
                    link: ''
                },
                {
                    btnInfo: '再次购买',
                    type: '交易成功',
                    link: ''
                },
                'err',
                'err',
                {
                    btnInfo: '再次购买',
                    type: '订单取消',
                    link: ''
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
mg-width = 1.125rem
width100 = 100%
  .orderFrom-wrapper    
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
     .order-content-wrapper
        width: 100%
        height 100%
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
                height: 3.5rem
            .content-item-bottom
                height: 3.4375rem
            .content-item
                display flex
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
             
                            
</style>    

