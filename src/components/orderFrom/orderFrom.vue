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
                  <span class="my-order">我的订单</span>
                  <span class="all-order">查看全部订单</span>
                  <img class="more" width=11 height=11 src="./more.png"/>
            </a>
            <div class="order-content">
                <div class="content">
                    <img class="product" width=52 height=52 src="./product01.png"/><span class="desc">圣雅琦 明眸亮莹眼部精华圣雅琦 明眸亮莹眼部精华</span>
                </div>          
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
  .orderFrom-wrapper
    position: absolute
    top: 1.875rem
    left: 0
    width: 100%
    height: 80%
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
        padding-right: 16px
        width: 100%
        margin: 10px 0 0 15px
        font-size: 0
        .order-title
            display: block
            width: 100%
            height: 36px
            line-height: 36px
            border-bottom-1px(#e6e6e6)
            .my-order 
                font-size: 11px   
                color: #333
            .all-order
                display: inline-block    
                float: right
                margin-right: 52px
                font-size: 11px
                color: #909090
            .more 
                position: absolute
                right: 1rem
                top: 50%
                margin-top: -5.5px
                margin-right: 16px              
        .order-content
            padding: 18px 75px 18px 0
            width: 100%
            height: 138px
            background: #ff0
            border-bottom-1px(#e6e6e6)        
            .content
                width: 80%
                height: 100%
                border: 1px solid red
            .product
                margin-right: 9px    
            .desc
                vertical-align: top
                font-size: 11px        
/*      
position: absolute
        right: 1rem
        top: 50%
        margin-top: -0.5rem
        margin-right: 0.875rem  
*/
</style>

