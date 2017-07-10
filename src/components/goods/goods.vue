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
            <!--附近的项目实体店-->
            <a href="javascript:void(0)" class="storeNearby">
                <div class="colLeft">
                    <p>
                        <span>附近的项目实体店</span>
                    </p>
                    <div>天誉花园</div>
                    <p>
                        <span class="dis">1.1公里</span>
                        <span>|</span>
                        <span class="tim">14分钟</span>
                    </p>
                </div>
                <div class="colRight">
                    <img src="./images/arrow_right.png" height="10">
                </div>
            </a>
            <hr class="divider dividerThin">
            <!--查找其他项目实体店-->
            <a href="javascript:void(0)" class="storeFind">
                <div class="colLeft">
                    <img src="./images/location.png" height="11">
                    <p>查找其他项目实体店</p>
                </div>
                <div class="colRight">
                    <p>附近有4家</p>
                    <img src="./images/arrow_right.png" height="10">
                </div>
            </a>
            <hr class="divider dividerBig">
            <!--分类列表-->
            <div class="kindList">
                <a href="javascript:void(0)" class="oneKind">
                    <div class="oneKindMain">
                        <img src="./images/kind01.png" width="148" height="100">
                        <div>
                            <h1>营养食品</h1>
                            <p>美悠斯</p>
                        </div>
                    </div>
                    <hr class="divider dividerThinNoMargin">
                </a>
                <a href="javascript:void(0)" class="oneKind">
                    <div class="oneKindMain">
                        <img src="./images/kind02.png" width="148" height="100">
                        <div>
                            <h1>美容护肤</h1>
                            <p>圣雅琦、欧结蔓、M2、阿斯蒂芬表达式、是电饭锅电饭锅</p>
                        </div>
                    </div>
                    <hr class="divider dividerThinNoMargin">
                </a>
                <a href="javascript:void(0)" class="oneKind">
                    <div class="oneKindMain">
                        <img src="./images/kind03.png" width="148" height="100">
                        <div>
                            <h1>塑身美体</h1>
                            <p>完美尺寸</p>
                        </div>
                    </div>
                    <hr class="divider dividerThinNoMargin">
                </a>
            </div>
            <hr class="divider dividerBig">
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
        border-top 10px solid #e0e0e0
    // 细分割线
    .dividerThin
        border-width 1px
        margin-left 16px
    // 细分割线no-margin
    .dividerThinNoMargin
        border-width 1px
    // 粗分割线
    .dividerBig
        border-width 10px
        border-color #f0f0f0
    // 主体
    .main
        margin-bottom 43px
        a
            display block
        // 附近的项目实体店
        .storeNearby
            display flex
            justify-content space-between
            height 78px
            .colLeft
                display flex
                flex-direction column
                justify-content center
                margin-left 16px
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
            .colRight
                display flex
                align-items center
                margin-right 16px
        // 查找其他项目实体店
        .storeFind
            display flex
            height 42px
            justify-content space-between
            align-items center
            .colLeft
                display flex
                margin-left 16px
                p
                    margin-left 3px
                    color #333
                    font-size 0.6875rem
            .colRight
                display flex
                margin-right 16px
                p
                    font-size 0.6875rem
                    margin-right 6px
                    color #909090
        // 分类列表
        .kindList
            display flex
            flex-direction column
            .oneKind
                display flex
                flex-direction column
                padding-left 16px
                .oneKindMain
                    display flex
                    align-items center
                    height 121px
                    img
                        display block
                        margin-right 30px
                    div
                        text-align justify
                        overflow hidden
                        margin-right 16px
                        h1
                            font-size 0.8125rem
                            color #333
                        p
                            font-size 0.6875rem
                            color #909090
                            margin-top 3px
            .oneKind:last-child
                hr
                    border 0
        // 所有块的点击效果
        .storeNearby
        .storeFind
        .oneKind
            // transition background-color 1s
            background-color #fff
        .storeNearby:active
        .storeFind:active
        .oneKind:active
            background-color #f0f0f0
</style>
