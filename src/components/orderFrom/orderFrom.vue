<template>
  <div class="orderFrom-wrapper">
      <v-view class="route-item"></v-view>
  <!--头部  -->    
      <div class="header">
        <div class="header-content border-bottom-1px">
            <h1 class="title">查看订单</h1>
            <a href="#search"><img class="search" src="./search.png"/></a>
        </div>
      </div>
      <div class="content-wrapper item-cls">
            <a href="#home" class="order-title">
                  <span class="title">我的订单</span>
                  <span class="content">查看全部订单</span>
                  <img class="more" width=11 height=11 src="./more.png"/>
            </a>
            <div class="order-content">
                <div class="content-item content-item-top">
                    <img class="product" width=104 height=104 src="./product01.png"/>
                    <div class="product-message">
                        <span class="desc">圣雅琦 明眸亮莹眼部精华圣雅琦 明眸亮莹眼部精华</span>
                        <p class="num">数量:1</p>
                        <p class="price">总价:￥39.00</p>
                    </div>
                    <span class="for-to-paid">待付款</span>
                    <div class="handle"><a class="link" href="#">立即结账</a></div>
                </div>
                <div class="content-item content-item-bottom">
                    <img class="product" width=104 height=104 src="./product01.png"/>
                    <div class="product-message">
                        <span class="desc">圣雅琦 明眸亮莹眼部精华</span>
                        <p class="num">数量:1</p>
                        <p class="price">总价:￥39000.00</p>
                    </div>
                    <span class="for-to-paid">待评价</span>
                    <div class="handle"><a class="link" href="#">再次购买</a></div>
                    <div class="handle pos-left"><a class="link" href="#">待评价</a></div>
                </div>          
            </div>
            <a class="more-orderFrom" href="#">查看更多订单</a>
            <div class="line"></div>
            <a href="#home" class="order-title">
                  <span class="title">我的收藏</span>
                  <span class="content">查看所有收藏</span>
                  <img class="more" width=11 height=11 src="./more.png"/>
            </a>
            <div class="slide-wrapper">
                <div class="slide-container">   
                    <swiper :list="demo01_list" v-model="demo01_index" @on-index-change="demo01_onIndexChange">

                    </swiper> 
                    <div class="x-botton" style="position:absolute; bottom: 40px;width: 100%">
                        <x-button @click.native="demo01_index = key" v-for="(val,key) in demo01_list" class="x-item" :class="{active:demo01_index==key}">{{key}}</x-button>
                    </div>
                </div>
                <p style="font-size:12px" v-for="(val,key) in demo01_list"></p>
            </div>
      </div>
 <!--头部  -->     
  </div>
</template>
<script type="ecmascript-6">
import view from '../../components/view/view';
import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux';
const imgList = [
	'http://img.dwstatic.com/www/1707/363289838921/1499336815305.jpg',
	'http://img.car.mianfeiapp.net/upload/20170527/14958505848030.jpg',
    'http://img.car.mianfeiapp.net/upload/20170527/14958505847196.jpg',
    'http://img.car.mianfeiapp.net/upload/20170527/14958505857898.jpg',
    'http://img.car.mianfeiapp.net/upload/20170527/14958505851569.jpg'
]
const baseList = [{ 
   url: 'javascript:', 
   img: 'http://f12.baidu.com/it/u=2438918904,3021139008&fm=72',
   title:"圣雅琦 明眸亮莹眼部精华"
 }, { 
   url: 'javascript:', 
   img: 'http://img.sc115.com/uploads/allimg/110518/201105181934451250.jpg',
   title:"圣雅琦 送到家里电视机分厘卡"
 }, { 
   url: 'javascript:', 
   img: 'http://pic.58pic.com/58pic/12/03/53/78d58PICIPR.jpg',
   title:"圣雅琦 阿斯顿撒旦"
 },{ 
   url: 'javascript:', 
   img: 'http://img3.redocn.com/20100327/Redocn_2010032702520247.jpg',
   title:"圣雅琦 似的撒旦"
 },{ 
   url: 'javascript:', 
   img: 'http://a4.att.hudong.com/46/84/300534043329134140848931667.png',
   title:"圣雅琦 阿斯顿撒旦撒旦"
 }
 ] 
  
//  const imgList = [ 
//    'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff', 
//    'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff', 
//    'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff' 
//  ] 
 
 const urlList = baseList.map((item, index) => ({ 
   url: 'http://m.baidu.com', 
   img: item.img, 
   title: `(可点击)${item.title}` 
 })) 
  
 const demoList = imgList.map((one, index) => ({ 
   url: 'javascript:', 
   img: one 
 })) 
 
 const only2ClickList = baseList.slice(0, 2).map(item => { 
 item.url = '#' 
   return item 
 }) 
  
 export default { 
   components: { 
    Swiper, 
     SwiperItem, 
     GroupTitle, 
     XButton, 
     Divider,
     'v-view': view 
  }, 
   ready () { 
  
   }, 
   methods: { 
    onSwiperItemIndexChange (index) { 
      console.log('demo item change', index) 
     }, 
     demo01_onIndexChange (index) { 
       this.demo01_index = index 
     }
  }, 
   data () { 
     return { 
       demo01_list: baseList,  
      demo01_index: 0, 
       swiperItemIndex: 1 
     } 
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
    width: 100%
    height: 100%
    background: #fff
    overflow: hidden
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
                    margin: 0.5625rem 0.5625rem 0 0    
                .product-message
                    margin-top: 9px
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
                    margin: 0.1406rem mg-width 0 0 
                    vertical-align: top
                    float: right
                    height: 0.6875rem
                    line-height: 0.6875rem
                    text-align: center
                    font-size: 0.3438rem
                    color: #ea6aa2        
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
        .slide-wrapper
            margin-left: -15px
            width: 100%
            .slide-container
                position: relative
                margin: 15px auto
                width: 100%
                height: 190px
                .vux-slider
                    overflow: visible
                    width: 100%
                    .vux-swiper
                        overflow: hidden
                        position: relative
                        margin: 0 auto
                        width: 123px
                        height: 123px
                        background-size: 123px 123px
                        .active
                            background: none
                        .vux-img
                            width: 123px !important
                            height: 123px !important
                    .vux-swiper-desc
                        bottom: 36px
                        width: 123px 
                        padding: 0
                        height: auto
                        overflow: visible 
                        text-overflow: clip
                        word-wrap:break-word 
                        white-space: nowrap 
                        text-shadow: none
                        background: #fff
                        font-size: 11px
                        color: #333               
                .vux-indicator 
                    display: none
                .x-item
                    float: left  
                    width: 20%
                    height: 1.5008px 
                    margin: 0
                .shop-desc
                    margin-top: 11px
                    font-size: 11px    
                .shop-price
                    display: block
                    font-size: 11px    
                .active
                    background: #606060        
                            
</style>    

