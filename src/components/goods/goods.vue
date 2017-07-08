<template>
    <div class="goods-wrapper">
        <!--头部-->    
        <div class="header">
            <div class="header-content border-bottom-1px">
                <h1 class="title">商品分类</h1>
                <img class="search" src="./images/search.png" width="16" height="16">
            </div>
        </div>
        <!--主体-->
        <div class="main">
            <hr class="divider dividerThin">
            <a href="javascript:void(0)" class="storeNearby">
                <p>
                    <span>附近的项目实体店</span>
                </p>
                <div>天誉花园</div>
                <p>
                    <span class="dis">1.1公里</span>
                    <span>|</span>
                    <span class="tim">14分钟</span>
                </p>
            </a>
            <a href="javascript:void(0)" class="storeFind"></a>
        </div>
    </div>
</template>
<script type="ecmascript-6">
export default {
  
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
.goods-wrapper
    position absolute
    top 2.5rem
    left 0
    width 100%
    background #fff
    overflow hidden
    // 头部
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
    // 分割线
    .divider
        margin 0
        border-left 0
        border-right 0
        border-bottom 0
        border-top 10px solid #f6f6f6
    // 细分割线
    .dividerThin
        border-width 1px
    // 主体
    .main
        a
            display block
        .storeNearby
            display flex
            margin-left 16px
            height 78px
            flex-direction column
            justify-content center
            div
                color #333
                font-size 0.75rem
            p:first-child
                margin-bottom 7px
            p:last-child
                margin-top 7px
            p
                display flex
                font-size 0.6875rem
                color #909090
                span.dis
                    margin-right 2px
                span.tim
                    margin-left 2px
</style>

