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
            <!-- 收货人 -->
            <div class="infoBox">
                <div class="rowLeft">收货人：</div>
                <div class="rowRight">大帅比</div>
            </div>
            <!-- 手机号码 -->
            <div class="infoBox">
                <div class="rowLeft">手机号码：</div>
                <div class="rowRight">15555555555</div>
            </div>
            <!-- 所在地区 -->
            <div class="infoBox loc">
                <div class="rowLeft">所在地区：</div>
                <div class="rowRight">
                    <p>广东省广州市海珠区</p>
                    <img src="./images/arrow_right.png">
                </div>
            </div>
            <!-- 街道地址 -->
            <div class="infoBox locDetail">
                <div class="rowLeft">街道地址：</div>
                <div class="rowRight">街道地址在哪里呢滑稽街道地址在哪里呢滑稽</div>
            </div>
            <!-- 默认地址 -->
            <a href="javascript:void(0)" class="selDefault">
                <img src="./images/unchecked.png">
                <p>默认地址</p>
            </a>
            <!-- 保存 -->
            <div class="saveAddr">
                <router-link to="/home" class="saveAddrItem">保存</router-link>
            </div>
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
        // 一般
        .infoBox
            display flex
            align-items center
            height 1.3438rem
            font-size 0.4375rem
            background-color #fff
            border-bottom-1px(#e0e0e0)
            .rowLeft
                display flex
                justify-content flex-end
                width 2.1875rem
                margin 0 0.7188rem 0 0.3125rem
                color #525252
            .rowRight
                width 6.4688rem
                color #262626
        // 特殊
        .locDetail
            height 2.0313rem
        .loc
            .rowRight
                display flex
                justify-content space-between
                width 6.0469rem
                img
                    width 0.2344rem
                    height 0.4063rem
        // 保存
        .saveAddr
            display flex
            justify-content center
            width 100%
            .saveAddrItem
                display flex
                justify-content center
                align-items center
                width 7.9688rem
                height 1.25rem
                margin-top 1.2344rem
                background-color #ea68a2
                border-radius 0.1563rem
                font-size 0.5rem
                color #fff
        // 默认地址
        .selDefault
            display flex
            margin-top 0.5625rem
            img
                width 0.4688rem
                height 0.4688rem
                margin-left 0.2813rem
            p
                height 100%
                margin-left 0.2188rem
                font-size 0.4688rem
</style>