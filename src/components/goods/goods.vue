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
       headerCss()
</style>

