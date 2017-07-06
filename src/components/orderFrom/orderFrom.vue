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
                <ul class="slide-container">
                    <li class="slide-item">
                        <img src="" width=100% height=100%/>
                        <span class="slide-title">圣雅琦 明眸亮莹眼部精华</span>
                        <span class="slide-price">￥39.00</span>
                    </li>
                </ul>
            </div>
      </div>
 <!--头部  -->     
  </div>
</template>
<script type="ecmascript-6">
export default {
  
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
                    bottom: 14px
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
            height: 190px
            background: #ccc
            .slide-container
                width: 123px
                height: 165px
                margin: 15px auto
                border: 1px solid red


                            
</style>    

