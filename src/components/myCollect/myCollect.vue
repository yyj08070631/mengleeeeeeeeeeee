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
            <div class="title">我的收藏</div>
            <div class="search">
                <a href="#search">
                    <img src="./images/search.png">
                </a>
            </div>
        </header>
        <!-- 主体 -->
        <section class="main">
            <!-- 正常收藏件 -->
            <div class="oneCollect">
                <img src="./images/mainMap.png">
                <div class="info">
                    <div class="rowUp">刺绣牛仔九分裤女</div>
                    <div class="rowMiddle">
                        <span>￥</span>
                        <span>55.</span>
                        <span>8</span>
                    </div>
                    <div class="rowDown">
                        <a href="javascript:void(0)" class="add">
                            <img src="./images/cart.png">
                        </a>
                        <a href="javascript:void(0)" class="del">删除</a>
                    </div>
                </div>
            </div>
            <!-- 失效收藏件 -->
            <div class="oneCollect oneBadCollect">
                <img src="./images/mainMap.png">
                <div class="badCollect">已失效</div>
                <div class="info">
                    <div class="rowUp">刺绣牛仔九分裤女</div>
                    <div class="rowMiddle">
                        <span>￥</span>
                        <span>55.</span>
                        <span>8</span>
                    </div>
                    <div class="rowDown">
                        <a href="javascript:void(0)" class="add">
                            <img src="./images/cart.png">
                        </a>
                        <a href="javascript:void(0)" class="del">删除</a>
                    </div>
                </div>
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
            orderList: []
        }
    },
    methods: {
        getDataFromBackend: function() {
            this.$http({
                method: 'get',
                url: global.Domain + '/Order/collist',
                emulateJSON: true
            }).then(function (response) {
                this.orderList = response.body
                console.log(this.orderList)
            })
        }
    },
    mounted(){
        this.$nextTick(function(){
            this.getDataFromBackend()
        })
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'

width = 100%
color = #fff
// 外层元素
.goodDetail-wrapper
    position fixed
    top 1.25rem
    left 0
    width width
    background #fff
    // 详情页header
    .header
        headerFlex()
    // 主体
    .main
        // 正常收藏件
        .oneCollect
            display flex
            width 100%
            margin-top 0.3125rem
            & > img
                width 3.3438rem
                height 3.25rem
            .info
                width 100%
                .rowUp
                    padding 0.3125rem 0 1.0625rem 0.25rem
                    font-size 0.4063rem
                    color #333
                .rowMiddle
                    display flex
                    align-items flex-end
                    padding 0 0 0.3125rem 0.25rem
                    color #ea68a2
                    span:first-child, span:last-child
                        font-size 0.4375rem
                    span:nth-child(2)
                        font-size 0.5rem
                .rowDown
                    display flex
                    justify-content flex-end
                    .add
                        display flex
                        justify-content center
                        align-items center
                        height 0.6563rem
                        width 1.5469rem
                        border 0.0313rem solid #ea68a2
                        border-radius 0.0938rem
                    .del
                        display flex
                        justify-content center
                        align-items center
                        height 0.6563rem
                        width 1.5469rem
                        margin 0 0.4063rem 0 0.2813rem
                        border 0.0313rem solid #ababab
                        border-radius 0.0938rem
                        font-size 0.3438rem
                    img
                        width 0.5rem
                        height 0.5rem
        // 失效收藏件
        .oneBadCollect
            position relative
            .badCollect
                display flex
                justify-content center
                align-items center
                position absolute
                left 0.5469rem
                top 0.5rem
                width 2.25rem
                height 2.25rem
                border-radius 50%
                font-size 0.4063rem
                background-color rgba(255, 255, 255, .5)
</style>