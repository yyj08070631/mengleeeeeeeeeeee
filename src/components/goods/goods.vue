<template>
  <div class="goods-wrapper">
  <!--头部  -->    
      <div class="header">
        <div class="header-content border-bottom-1px">
            <h1 class="title">商品分类</h1>
            <img class="search" src="./search.png" width="16" height="16"/>
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
.goods-wrapper
    position: absolute
    top: 1.875rem
    left: 0
    width: 100%
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
</style>

