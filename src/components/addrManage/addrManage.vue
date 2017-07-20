<template>
    <div class="goodDetail-wrapper">
        <!--头部-->
        <header class="header">
            <a href="javascript:history.back(1)" class="goBack">
                <img src="./images/arrow_left.png">
                <span>返回</span>
            </a>
            <div class="title">收货地址</div>
            <div class="search"></div>
        </header>
        <!-- 主体 -->
        <section class="main">
            <!-- 超大分割线 -->
            <div class="dividerBig"></div>
            <!-- 一个收货地址 -->
            <div class="oneAddr">
                <div class="rowUp">
                    <p class="name">大帅比</p>
                    <div class="phone">
                        <p>15555555555</p>
                        <span>默认</span>
                    </div>
                    <div class="icon">
                        <img src="./images/edit.png">
                        <img src="./images/del.png">
                    </div>
                </div>
                <div class="rowDown"></div>
            </div>
            <!-- 超大分割线 -->
            <div class="dividerBig"></div>
        </section>
    </div>
</template>
<script type="ecmascript-6">
export default {
    components: {

    },
    data() {
        return {

        }
    },
    methods: {
        getDataFromBackend: function () {

        }
    },
    mounted() {

    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'

width = 100%
color = #fff
// init
span, a, img, input, textarea
    display block

// 外层元素
.goodDetail-wrapper
    position absolute
    top 1.25rem
    left 0
    width width
    background #fff
    // 详情页header
    .header
        border-bottom-1px(#e0e0e0)
        position fixed
        display flex
        top 0
        left 0
        justify-content space-between
        align-items center
        height 1.25rem
        width width
        background-color #f9f9f9
        z-index 1
        .goBack
            display flex
            align-items center
            width width
            flex 1
            span
                display block
                color #ea68a2
                margin-left 0.1563rem
                font-size 0.4063rem
            img
                display block
                margin-left 0.5rem
        .title
            font-size 0.4063rem
            font-weight 800
            flex 1
            width width
            text-align center
        .search
            display flex
            justify-content flex-end
            font-size 0.4063rem
            color #ea68a2
            flex 1
    // 主体
    .main
        margin-bottom 1.4063rem
        // 分割线
        .dividerBig
            width 100%
            height 0.3125rem
            background-color #ddd
</style>