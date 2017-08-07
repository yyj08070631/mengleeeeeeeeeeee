<template>
    <div class="header-bar">
        <a href="#home"><img src="./home.png"></a>
        <div></div>
        <a href="#search"><img src="./search.png"></a>
        <a href="#myCenter"><img src="./center.png"></a>
    </div>
</template>
<script type="ecmascript-6">
export default {
  
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
.header-bar
    display flex
    position fixed
    top 0 
    left 0 
    width 100%
    height 1.4063rem
    z-index 1005
    background rgba(0,0,0,0.05)
    div:nth-child(2)
        flex 1
    a
        display flex
        align-items center
        justify-content center
        width 0.9375rem
        height 0.9375rem
        background rgba(0,0,0,0.5)  
        border-radius 50%
    a:first-child
        margin 0.2813rem 0 0 0.2813rem  
        img
            width 0.75rem
            height 0.75rem
    a
        margin 0.2813rem 0.2813rem 0 0 
                
</style>
