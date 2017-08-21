<template>
    <header class="searchHead">
        <div class="outElem">
            <div class="imgBox">
                <img src="./images/search_grey.png">
            </div>
            <div class="inputBox">
                <input type="text" placeholder="请输入商品关键字">
            </div>
            <div class="cancelBox">
                <span>×</span>
            </div>
        </div>
        <!-- <a href="javascript:void(0)" class="searchBtn">搜索</a> -->
    </header>
</template>
<script type="ecmascript-6">
export default {
    
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
// 头部
.searchHead
    display flex
    align-items center
    position fixed
    left 0
    top 0
    height 1.25rem
    width 100%
    background-color #f0f0f0
    z-index 100
    .outElem
        display flex
        align-items center
        width 9.375rem
        height 0.9375rem
        margin-left 0.3125rem
        border-radius 0.0938rem
        background-color #fff
        .imgBox
            display flex
            align-items center
            width 0.5rem
            height 0.5rem
            padding 0.25rem
            img
                width 0.5rem
                height 0.5rem
        .inputBox
            display flex
            align-items center
            height 100%
            width 7.4375rem
            input
                width 100%
                font-size fs
                outline 0
        .cancelBox
            padding 0.25rem
            span
                display flex
                justify-content center
                width 0.375rem
                height 0.375rem
                border-radius 50%
                background-color #e0e0e0
                font-size fs
                line-height 0.3125rem
                color #fff
    .searchBtn
        display flex
        justify-content center
        align-items center
        width 1.75rem
        height 100%
        font-size fs + 0.0469rem
        color #ea68a2
</style>
