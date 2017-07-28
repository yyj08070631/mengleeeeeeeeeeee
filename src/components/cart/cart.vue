<template>
    <div class="goodDetail-wrapper">
        <!--头部-->
        <header class="header">
            <div class="goBack">
                <a href="javascript:history.back(1)">
                    <img src="./images/arrow_left.png">
                    <span>返回</span>
                </a>
            </div>
            <div class="title">我的购物袋</div>
            <div class="search"><p>编辑</p></div>
        </header>
        <!-- 主体 -->
        <section class="main">
            <!-- 超大分割线 -->
            <div class="dividerBig"></div>
            <!-- 一个商品 -->
            <div class="oneProduct">
                <!-- 选择框 -->
                <div class="colLeft">
                    <!-- 选择那个圈圈 -->
                    <img src="./images/checked.png">
                </div>
                <!-- 商品图片 -->
                <div class="colMiddle">
                    <img src="./images/mainmap.png">
                </div>
                <!-- 信息 & 修改数量 -->
                <div class="colRight">
                    <p class="rowUp">男士韩版修身小脚牛仔裤</p>
                    <div class="rowDown">
                        <span class="price">
                            <span>￥</span>
                            <span>45.</span>
                            <span>9</span>
                        </span>
                        <div class="count">
                            <a href="javascript:void(0)">-</a>
                            <input type="text" value="1">
                            <a href="javascript:void(0)">+</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 一个商品 -->
            <div class="oneProduct">
                <!-- 选择框 -->
                <div class="colLeft">
                    <!-- 选择那个圈圈 -->
                    <img src="./images/unchecked.png">
                </div>
                <!-- 商品图片 -->
                <div class="colMiddle">
                    <img src="./images/mainmap.png">
                </div>
                <!-- 信息 & 修改数量 -->
                <div class="colRight">
                    <p class="rowUp">男士韩版修身小脚牛仔裤</p>
                    <div class="rowDown">
                        <span class="price">
                            <span>￥</span>
                            <span>45.</span>
                            <span>9</span>
                        </span>
                        <div class="count">
                            <a href="javascript:void(0)">-</a>
                            <input type="text" value="1">
                            <a href="javascript:void(0)">+</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 超大分割线 -->
            <div class="dividerBig"></div>
        </section>
        <!-- 脚部 -->
        <footer class="footer">
            <div class="colLeft">
                <img src="./images/unchecked.png">
                <p class="selAll">全选</p>
            </div>
            <div class="colMiddle">
                <p class="total">合计：</p>
                <p class="price">￥0.00</p>
            </div>
            <router-link to="/home" class="pay">结算(0)</router-link>
        </footer>
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
    top 1.0938rem
    left 0
    width width
    height: 100%
    background #f0f0f0
    // 详情页header
    .header
        border-bottom-1px(#e0e0e0)
        position fixed
        display flex
        top 0
        left 0
        justify-content space-between
        align-items center
        height 1.0938rem
        width width
        background-color #f9f9f9
        z-index 1
        .goBack
            display flex
            align-items center
            width width
            margin-left 0.5rem
            flex 1
            span
                display block
                color #ea68a2
                margin-left 0.1563rem
                font-size 0.4063rem
            img
                display block
                width: 0.2188rem
                height: 0.3906rem 
        .title
            font-size 0.4063rem
            font-weight 800
            flex 1
            width width
            text-align center
        .search
            display flex
            justify-content flex-end
            margin-right 0.5rem
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
            background-color #f0f0f0
        // 一个产品
        .oneProduct
            display flex
            width 100%
            padding 0.2813rem 0
            border-bottom-1px(#e0e0e0)
            background-color #fff
            // 选择框
            .colLeft
                display flex
                justify-content center
                align-items center
                img
                    height 0.5938rem
                    width 0.5938rem
                    margin 0 0.3438rem
                    border-radius 50%
            // 商品图片
            // ......
            // 信息 & 修改数量
            .colRight
                display flex
                flex-direction column
                justify-content space-between
                width 100%
                margin-left 0.2188rem
                .rowUp
                    font-size 0.4063rem
                .rowDown
                    display flex
                    justify-content space-between
                    .price
                        display flex
                        align-items flex-end
                        margin-bottom 0.125rem
                        color #ea68a2
                        span:first-child, span:last-child
                            font-size 0.4375rem
                        span:nth-child(2)
                            font-size 0.5rem
                    .count
                        display flex
                        margin-right 0.4063rem
                        border 0.0313rem solid #d6d6d6
                        border-radius 0.0938rem
                        a
                            display flex
                            justify-content center
                            align-items center
                            width 0.7188rem
                            height 0.6875rem
                            font-size 0.5rem
                            color #333
                        input
                            display flex
                            justify-content center
                            align-items center
                            width 0.8125rem
                            height 0.6875rem
                            font-size 0.5rem
                            color #333
                            text-align center
                        a:first-child
                            border-right 0.0313rem solid #d6d6d6
                        a:last-child
                            border-left 0.0313rem solid #d6d6d6
    // 脚部
    .footer
        display flex
        align-items center
        justify-content space-between
        position fixed
        width 100%
        height 1.4063rem
        bottom 0
        left 0
        background-color #fff
        .colLeft
            display flex
            align-items center
            height 100%
            margin-left 0.3125rem
            img
                width 0.6719rem
                height 0.6719rem
                margin-right 0.3125rem
            .selAll
                font-size 0.4063rem
                color #333
        .colMiddle
            display flex
            align-items center
            height 100%
            margin-left 1.25rem
            .total
                font-size 0.5rem
                color #333
            .price
                font-size 0.5rem
                color #ea68a2
        .pay
            display flex
            align-items center
            justify-content center
            height 100%
            width 2.5625rem
            font-size 0.4063rem
            color #fff
            background-color #ea68a2
</style>