<template>
  <div class="header-wrapper">
      <div class="header-content border-bottom-1px">
        <h1 class="title">美丽搜索</h1>
        <img class="search" src="./search.png" width="14" height="14"/>
      </div>
  </div>
</template>
<script type="ecmascript-6">
export default {
  
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
    .header-wrapper
        display: block
        position: fixed
        left: 0
        top: 0
        width: 100%
        height: 40px
        z-index: 450
        background: #f9f9f9
        overflow: hidden
        .header-content
            position: relative
            width: 100%
            height: 2.5rem
            line-height: 2.5rem
            border-bottom-1px(#c6c6c6)
            .search
                position: absolute
                right: 0.9375rem
                top: 50%
                margin-top: -0.75rem
            .title
                text-align: center
                font-size: 0.875rem
                font-weight: 800
            .search
                position: absolute
                right: 0.9375rem
                top: 50%
                margin-top: -0.4375rem      


</style>

