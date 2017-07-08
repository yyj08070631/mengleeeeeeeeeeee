<template>
  <div class="orderFrom-wrapper">
  <!--头部  -->    
      <div class="header">
        <div class="header-content border-bottom-1px">
            <h1 class="title">查看订单</h1>
            <img class="search" src="./search.png" width="16" height="16"/>
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
                    <img class="product" width=52 height=52 src="./product01.png"/>
                    <div class="product-message">
                        <span class="desc">圣雅琦 明眸亮莹眼部精华圣雅琦 明眸亮莹眼部精华</span>
                        <p class="num">数量:1</p>
                        <p class="price">总价:￥39.00</p>
                    </div>
                    <span class="for-to-paid">待付款</span>
                    <div class="handle"><a class="link" href="#">立即结账</a></div>
                </div>
                <div class="content-item content-item-bottom">
                    <img class="product" width=52 height=52 src="./product01.png"/>
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
   img: 'https://static.vux.li/demo/1.jpg',
   title:"圣雅琦 明眸亮莹眼部精华"
 }, { 
   url: 'javascript:', 
   img: 'https://static.vux.li/demo/2.jpg',
   title:"圣雅琦 明眸亮莹眼部精华"
 }, { 
   url: 'javascript:', 
   img: 'https://static.vux.li/demo/3.jpg',
   title:"圣雅琦 明眸亮莹眼部精华"
 },{ 
   url: 'javascript:', 
   img: 'http://img.car.mianfeiapp.net/upload/20170527/14958505851569.jpg',
   title:"圣雅琦 明眸亮莹眼部精华"
 },{ 
   url: 'javascript:', 
   img: 'http://img.car.mianfeiapp.net/upload/20170527/14958505857898.jpg',
   title:"圣雅琦 明眸亮莹眼部精华"
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
     Divider 
  }, 
   ready () { 
  
   }, 
   methods: { 
    onSwiperItemIndexChange (index) { 
      console.log('demo item change', index) 
     }, 
     demo01_onIndexChange (index) { 
       this.demo01_index = index 
     }, 
     demo05_onIndexChange (index) { 
       this.demo05_index = index 
     }, 
     demo05_onLoad (id) { 
      this.demo05_list = id === 1 ? baseList : demoList 
     }, 
     demo06_onIndexChange (index) { 
       this.demo06_index = index 
     }, 
     demo07_onIndexChange (index) { 
       this.demo07_index = index 
     } 
  }, 
   data () { 
     return { 
       demo01_list: baseList, 
       demo02_list: demoList, 
       demo03_list: demoList, 
       demo04_list: imgList, 
       demo05_list: [], 
       demo06_list: urlList, 
      demo07_list: only2ClickList, 
      demo01_index: 0, 
      demo02_index: 1, 
      demo05_index: 0, 
       demo06_index: 0, 
      demo07_index: 0, 
       swiperItemIndex: 1 
     } 
   } 
} 

</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
mg-width = 32px
  .orderFrom-wrapper
    position: absolute
    top: 2.5rem
    left: 0
    width: 100%
    height: 100%
    background: #fff
    overflow: hidden
    .header
        display: block
        position: fixed
        left: 0
        top: 0
        width: 100%
        height: 2.5rem
        z-index: 450
        background: #f9f9f9
        overflow: hidden
        .header-content
            position: relative
            width: 100%
            height: 2.5rem
            line-height: 2.5rem
            border-bottom-1px(#e5e5e5)
            .search
                position: absolute
                right: 0.9375rem
                top: 50%
                margin-top: -0.5rem
            .title
                text-align: center
                font-size: 0.875rem
                font-weight: 800
     .item-cls
       position: relative            
     .content-wrapper
        width: 100%
        margin-left: 15px
        font-size: 0
        .order-title
            display: block
            width: 100%
            height: 2.25rem
            line-height: 2.25rem
            border-bottom-1px(#e6e6e6)
            .title 
                font-size: 0.6875rem   
                color: #333
            .content
                display: inline-block    
                float: right
                margin-right: 3.25rem
                font-size: 0.6875rem
                color: #909090
            .more 
                position: absolute
                right: 30px
                top: 50%
                margin-top: -0.3438rem          
        .order-content
            width: 100%
            border-bottom-1px(#e6e6e6)        
            .content-item-top
                height: 128px
            .content-item-bottom
                height: 110px
            .content-item
                position: relative
                border-bottom-1px(#e6e6e6)           
                .product
                    float: left
                    margin: 1.125rem 0.5625rem 0 0    
                .product-message
                    margin-top: 1.125rem
                    float: left
                    width: 10.5rem
                    line-height: 1.25rem
                    font-size: 0.6875rem 
                    .desc
                        color: #333
                    .num
                        color: #909090
                    .price
                        color: #909090
                .for-to-paid
                    display: inline-block
                    margin: 18px mg-width 0 0 
                    vertical-align: top
                    float: right
                    height: 22px
                    line-height: 22px
                    text-align: center
                    font-size: 11px
                    color: #ea6aa2        
                .handle
                    display: block
                    position: absolute
                    right: mg-width
                    bottom: 11px
                    width: 59px   
                    height: 18px
                    line-height: 18px
                    font-size: 11px
                    text-align: center
                    border-radius: 5px
                    color: #fff 
                    background: #ea6aa2     
                    .link
                        color: #fff
                .pos-left
                    margin-right: 66px                 
        .more-orderFrom
            display: block
            width: 100%
            height: 39px
            line-height: 39px
            font-size: 11px
            text-align: center
            color: #ea6aa2
        .line
            margin-left: -15px
            width: 100%
            height: 11px
            background: #f6f6f6   
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
                    height: 123px
                    .vux-swiper
                        overflow: visible
                        position: relative
                        margin: 0 auto
                        width: 123px
                        height: 123px
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
                    height: 1.5px 
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

