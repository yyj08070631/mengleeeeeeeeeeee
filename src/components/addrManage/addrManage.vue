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
            <!-- 一个收货地址 -->
            <router-link to="/buyGoods" class="oneAddr">
                <div class="rowUp">
                    <div class="nameAndPhone">
                        <p class="name">大帅比</p>
                        <div class="phone default">15555555555</div>
                    </div>
                    <div class="icon">
                        <router-link to="/addrEdit">
                            <img src="./images/edit.png">
                        </router-link>
                        <router-link to="/home">
                            <img src="./images/del.png">
                        </router-link>
                    </div>
                </div>
                <div class="rowDown">
                    厉害了厉害了厉害了厉害了厉害了厉害了厉害了厉害了厉害了厉害了厉害了
                </div>
            </router-link>
            <!-- 一个收货地址 -->
            <router-link to="/buyGoods" class="oneAddr">
                <div class="rowUp">
                    <div class="nameAndPhone">
                        <p class="name">大帅比</p>
                        <div class="phone">15555555555</div>
                    </div>
                    <div class="icon">
                        <router-link to="/addrEdit">
                            <img src="./images/edit.png">
                        </router-link>
                        <router-link to="/home">
                            <img src="./images/del.png">
                        </router-link>
                    </div>
                </div>
                <div class="rowDown">
                    厉害了厉害了厉害了厉害了厉害了厉害了厉害了厉害了厉害了厉害了厉害了厉害了厉害了厉害了厉害了厉害了厉害了厉害了厉害了厉害了厉害了厉害了厉害了厉害了厉害了厉害了
                </div>
            </router-link>
            <!-- 新建地址 -->
            <div class="newAddr">
                <router-link to="/addrEdit" class="newAddrItem">新建地址</router-link>
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
        margin-bottom 1.4063rem
        // 分割线
        .dividerBig
            width 100%
            height 0.3125rem
            background-color #ddd
        // 一个收货地址
        .oneAddr
            display flex
            flex-direction column
            justify-content center
            align-items center
            padding-bottom 0.3125rem
            border-bottom-1px(#e0e0e0)
            .rowUp
                display flex
                justify-content space-between
                align-items center
                width 9rem
                margin 0.5625rem 0 0.5313rem 0 
                .nameAndPhone
                    display flex
                    .name
                        font-size 0.4375rem
                        color #333
                        margin-right 0.9375rem
                    // 电话
                    .phone
                        display flex
                        position relative
                        font-size 0.4375rem
                        color #333
                    // 带 "默认" 的电话
                    .default:after
                        content ''
                        position absolute
                        right -1.2031rem
                        width 1.0781rem
                        height 0.4219rem
                        background url('./images/default.png') no-repeat
                .icon
                    display flex
                    align-items center
                    a
                        display flex
                        justify-content center
                        align-items center
                    a:last-child
                        margin-left 0.6875rem
            .rowDown
                width 9rem
                font-size 0.375rem
                color #909090
                text-align justify
                line-height 1.5
        // 新建地址
        .newAddr
            display flex
            justify-content center
            width 100%
            .newAddrItem
                display flex
                justify-content center
                align-items center
                width 7.9688rem
                height 1.25rem
                margin-top 1.2344rem
                background-color #ea68a2
                border-radius 0.1563rem
                font-size 0.4375rem
                color #fff
</style>