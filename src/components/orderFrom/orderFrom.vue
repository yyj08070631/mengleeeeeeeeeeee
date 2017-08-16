<template>
    <div class="orderFrom-wrapper">
        <!-- 头部 -->
        <!-- <v-header></v-header> -->
        <div class="content-wrapper item-cls">
            <!-- 查看更多块 -->
            <a href="javascript:void(0)" class="order-title">
                <span class="title">我的订单</span>
                <router-link to="/allOrder">
                    <a href="javascript:;" class="content" >查看更多订单</a>
                </router-link>
                <img class="more" src="./more.png" />
            </a>
            <!-- 分割线 -->
            <hr class="dirLine">
            <!-- 商品板块 -->
            <div class="order-content">
                <p class="noGoods" v-show="orderList.orderitem.length < 1">您还没有订单哦 :)</p>
                <div class="content-item content-item-top" v-for="(val,key) in orderList.orderitem">
                    <img class="product" :src="val.mainmap" />
                    <div class="product-message">
                        <span class="desc">{{val.name}}</span>
                        <p class="num">单价:￥{{num(val.price)}}</p>
                        <p class="price">总价:￥{{num(val.price*val.number)}}</p>
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
                        <p class="num">单价:￥{{num(val.price)}}</p>
                        <p class="price">总价:￥{{num(val.price*val.number)}}</p>
                    </div>
                    <div>
                        <span class="for-to-paid">{{goodsTypeArr[val.status].type}}</span>
                        <span class="orderPrice">数量：{{val.number}}</span>
                    </div>
                    <div class="handle">
                        <router-link class="link" :to="{ path: goodsTypeArr[val.status].link1, query: { gid: val.id } }" >{{goodsTypeArr[val.status].btnInfo}}</router-link>
                    </div>
                    <div class="handle pos-left" v-if="val.status == 1 || val.status == 3 || val.status == 2">
                        <router-link class="link" :to="{ path: goodsTypeArr[val.status].link2, query: { gid: val.id } }" >{{goodsTypeArr[val.status].btnInfo2}}</router-link>
                    </div>
                </div>
            </div>
            <div class="order-content">
            </div>
            <a class="more-orderFrom" href="javascript:void(0)" @click="addPara()" v-show="orderList.orderitem.length > 0">{{goodsNode}}</a>
            <!-- <div class="line"></div> -->
            <!-- 分割线 -->
        </div>
        <!-- 收藏轮播 -->
        <!-- <div class="swiper-pos">
            <p class="noCollect" v-if="orderList.collectitem.length < 1">没有任何收藏哦&nbsp;:)</p>
            <swiper :options="swiperOption" ref="mySwiper" style="width: 100%;height: 100%" v-if="orderList.collectitem.length > 0">
            <swiper-slide v-for="(val,key) in orderList.collectitem">
                <router-link :to="{path:'/goodDetail',query:{gid:val.id}}">  
                    <img :src="val.mainmap">
                </router-link> 
                <p>{{val.name}}</p>
                <p v-if="val.type === 1">￥{{val.price}}</p>
            </swiper-slide> -->
            <!-- 这是轮播的小圆点 -->
            <!-- <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            <div class="footer">
            <div class="rowUp">
                <div class="logo"></div>
            </div>
            <div class="rowDown">
                <p class="Copyright">Copyright&nbsp;©&nbsp;2017&nbsp;梦乐城版权所有</p>
            </div>
            </div>
        </div> -->
        <!-- 脚注 -->
        <!-- 脚部控制面板 -->
        <!-- <v-view class="route-item"></v-view> -->
        <router-view></router-view>
        <!-- footer -->
        <v-view class="route-item"></v-view>
    </div>
</template>
<script type="ecmascript-6">
import view from '../../components/view/view';
import { swiper, swiperSlide } from 'vue-awesome-swiper'
// import header from '../../components/header/header';
export default {
    components: {
        'v-view': view,
        swiper,
        swiperSlide,
        // 'v-header': header
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
                console.log(this.orderList)
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
        // 1,020.00
        outputdollars: function (number) {
            if (number.length <= 3)
                return (number == '' ? '0' : number);
            else {
                var mod = number.length % 3;
                var output = (mod == 0 ? '' : (number.substring(0, mod)));
                for (var i = 0; i < Math.floor(number.length / 3); i++) {
                    if ((mod == 0) && (i == 0))
                        output += number.substring(mod + 3 * i, mod + 3 * i + 3);
                    else
                        output += ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);
                }
                return (output);
            }
        },
        outputcents: function (amount) {
            amount = Math.round(((amount) - Math.floor(amount)) * 100);
            return (amount < 10 ? '.0' + amount : '.' + amount);
        },
        num: function (number) {
            number = String(number).replace(/\,/g, "");
            if (isNaN(number) || number == "") return "";
            number = Math.round(number * 100) / 100;
            if (number < 0)
                return '-' + this.outputdollars(Math.floor(Math.abs(number) - 0) + '') + this.outputcents(Math.abs(number) - 0);
            else
                return this.outputdollars(Math.floor(number - 0) + '') + this.outputcents(number - 0);
        }
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
.orderFrom-wrapper
    width: 100%
    height: 100%
    background: #fff
    // overflow-x: hidden
    .route-item
        footerCss()
    .noGoods
        margin 20% 0
        font-size fs + 0.0625rem
        text-align center
        color #333
     .item-cls
       margin 0 !important
       position: relative   
       display: block
     .content-wrapper
        float: left
        width: 100%
        height: auto
        font-size: 0
        .order-title
            display: flex
            width: 100%
            height: 1.3125rem
            line-height: 1.3125rem
            justify-content center
            align-items center
            .title 
                flex 1
                margin-left 0.5625rem
                float: left
                font-size: fs - 0.0313rem
                color: #333
            .content
                flex 1
                display: block    
                float: right
                margin-right: 18px
                font-size: fs - 0.0313rem
                color: #909090
                align-items flex-end
            .more 
                margin-right 0.5rem
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
                border-bottom 1px solid #e0e0e0
                &:before
                    content '' 
                    position absolute
                    width 0.5625rem
                    height 0.0625rem
                    background #fff
                    bottom 0
                    z-index 1000
                .product
                    display block
                    float: left
                    width: 1.625rem 
                    height: 1.625rem
                    margin: 0.5625rem 0.5625rem 0 0.5625rem  
                .product-message
                    margin-top: 0.5rem
                    float: left
                    width: 5.25rem
                    line-height: 0.625rem
                    font-size: fs - 0.0313rem
                    .desc
                        color: #333
                    .num
                        color: #909090
                    .price
                        color: #909090
                .for-to-paid
                    display: inline-block
                    margin: 0.5rem 0.5625rem 0 0 
                    vertical-align: top
                    float: right
                    height: 0.6875rem
                    line-height: 0.6875rem
                    text-align: center
                    font-size: fs - 0.0313rem
                    color: #ea6aa2
                .orderPrice
                    display: inline-block
                    margin: 0 0.5625rem 0 0 
                    vertical-align: top
                    float: right
                    height: 0.6875rem
                    line-height: 0.6875rem
                    text-align: center
                    font-size: fs - 0.0313rem
                    color: #909090            
                .handle
                    display: block
                    position: absolute
                    right: 0.5625rem
                    bottom: 0.5rem
                    width: 1.8438rem   
                    height: 0.5625rem
                    line-height: 0.5625rem
                    font-size: fs - 0.0625rem
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
            margin-bottom 1.3438rem
            line-height: 1.2188rem
            font-size: fs - 0.0313rem
            text-align: center
            color: #ea6aa2
        .line
            width: 100%
            height: 0.3438rem
            background: #f0f0f0
    // 收藏列表swiper
    // .swiper-pos 
    //     float: left 
    //     width: 100%
    //     height: 8.125rem      
    //     .noCollect
    //         margin-top 3.5938rem
    //         text-align: center
    //         font-size: 0.5rem
    //         color: #333
    //     .swiper-container
    //         position: relative
    //         height: 7.5rem !important
    //         .swiper-pagination
    //             left 0% !important
    //             width 100% !important
    //         .swiper-wrapper
    //             width: 50% !important  
    //             height: 5.4688rem
    //             margin: 0.3125rem auto
    //             .swiper-pagination-bullet
    //             img
    //                 width: 5.4063rem !important   
    //                 height: 5.4063rem !important
    //             p
    //                 margin-top: 0.3125rem 
    //                 width: 5.4063rem !important   
    //                 font-size: 0.3438rem   
    //                 text-align: center
    //         .swiper-pagination
    //             height: 0.0313rem  !important 
    //             background: #ccc
    //             bottom: 0 !important 
    //             margin 0 !important
    //             span
    //                 height: 0.0313rem
    //     .swiper-pagination-bullet
    //         margin 0 !important
    //         height 0.0156rem !important
    //     .swiper-pagination-bullet-active   
    //         height 0.0313rem !important      
    //脚注
    // .footer
    //     width: 100%
    //     height: 1.9063rem
    //     background: #f0f0f0
    //     padding 0.3125rem 0
    //     margin-bottom 1.3438rem
    //     .rowUp
    //         display flex
    //         align-items center
    //         justify-content center
    //         padding-top 0.3125rem
    //         .logo  
    //             width: 2.6563rem
    //             height: 0.625rem
    //             background: url("./logo.png")
    //             background-size: 2.6563rem 0.625rem
    //     .rowDown
    //         display flex
    //         align-items center
    //         justify-content center
    //         padding-top 0.3125rem        
    //         .Copyright
    //             text-align: center
    //             font-size: 0.3438rem
    //             color: #909090     
    .dirLine
        border 0
        border-top 1px solid #e0e0e0
        margin-left 0.5rem
</style>    

