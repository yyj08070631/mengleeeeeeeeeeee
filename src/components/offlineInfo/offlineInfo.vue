<template>
    <div class="offlineInfo-wrapper">
        <!--头部-->
        <header class="header">
            <div class="goBack">
                <a href="javascript:history.back(1)">
                    <img src="./images/arrow_left.png">
                    <span>返回</span>
                </a>
            </div>
            <div class="title">我的团队</div>
            <div class="search">
                <a href="javascript:void(0)">
                    <img src="./images/search.png">
                </a>
            </div>
        </header>
        <!-- 主体 -->
        <section class="main">
            <!--图片轮播-->
            <swiper :aspect-ratio="640/800" loop auto @on-index-change="onIndexChange">
                <swiper-item class="swiper-demo-img" v-for="(item, index) in bannerImg" :key="index">
                    <img :src="item" width="100%" height="100%">
                </swiper-item>
            </swiper>
            <!-- 线下信息 -->
            <div class="offlineInfo">
                <div class="rowUp">
                    <p>完美尺寸 天御公园店</p>
                    <a href="javascript:void(0)">
                        <img src="./images/share.png">
                        <span>分享</span>
                    </a>
                </div>
                <hr class="divider">
                <div class="rowMiddle">
                    <p class="tel">020-38845959</p>
                    <p class="time">
                        营业时间：周一至周日，上午9:30-下午10:00
                    </p>
                </div>
                <hr class="divider">
                <a class="rowDown" href="javascript:void(0)">
                    <div class="colLeft">
                        <p class="loc">广州市天河区林和中路139号天誉花园2期101铺</p>
                        <p class="dis">
                            <span>1.1公里</span>
                            <span class="verticalLine">|</span>
                            <span>14分钟</span>
                        </p>
                    </div>
                    <div class="colRight">
                        <img src="./images/arrow_right.png">
                    </div>
                </a>
            </div>
            <!--粗分割线-->
            <hr class="divider dividerBig">
            <!-- 线下服务 -->
            <div>
                <h1>
                    <span class="verticalLine"></span>
                    <span></span>
                </h1>
                <hr class="divider">
                <p></p>
            </div>
            <!--粗分割线-->
            <hr class="divider dividerBig">
            <!--评论详情-->
            <div class="comment">
                <div class="titleDown">
                    <div class="colLeft">
                        <p>|</p>
                        <p>看看大伙怎么说</p>
                    </div>
                    <div class="colRight">
                        共172个评论
                    </div>
                </div>
                <hr class="divider">
                <div class="commentDetailContainer">
                    <div class="commentDetail">
                        <div class="colLeft">
                            <img src="./images/avatar00.png">
                        </div>
                        <div class="colRight">
                            <div class="rowUp">
                                <p>Duke</p>
                                <img src="./images/huangguan.png">
                            </div>
                            <div class="rowDown">
                                Emmet (前身为 Zen Coding) 是一个能大幅度提高前端开发效率的一个工具. 在前端开发的过程中，一大部分的工作是写 HTML、CSS 代码。特别是手动编写 HTML 代码的时候，效率会特别低下，因为需要敲打很多尖括号，而且很多标签都需要闭合标签等。于是，就有了 Emmet，它可以极大的提高代码编写的效率，它提供了一种非常简练的语法规则，然后立刻生成对应的 HTML 结构或者 CSS 代码，同时还有多种实用的功能帮助进行前端开发。
                            </div>
                        </div>
                    </div>
                    <hr class="divider">
                </div>
                <div class="commentDetailContainer">
                    <div class="commentDetail">
                        <div class="colLeft">
                            <img src="./images/avatar01.png">
                        </div>
                        <div class="colRight">
                            <div class="rowUp">
                                <p>友善猪</p>
                                <img src="./images/xiaobai.png">
                            </div>
                            <div class="rowDown">
                                我就是这段时间用了就减掉了两斤肉肉。真的很高兴、看到这么多激励的评论，现在又有减肥的动力了。
                            </div>
                        </div>
                    </div>
                    <hr class="divider">
                </div>
                <div class="commentDetailContainer">
                    <div class="commentDetail">
                        <div class="colLeft">
                            <img src="./images/avatar02.png">
                        </div>
                        <div class="colRight">
                            <div class="rowUp">
                                <p>A 欧阳飞刀</p>
                                <img src="./images/xingxing.png">
                            </div>
                            <div class="rowDown">
                                没有做任何的配合运动就瘦了那么多，真的是不知道高兴的说什么好了，对现在的身材已经非常满意了
                            </div>
                        </div>
                    </div>
                    <hr class="divider">
                </div>
                <div class="commentDetailContainer">
                    <div class="commentDetail">
                        <div class="colLeft">
                            <img src="./images/avatar03.png">
                        </div>
                        <div class="colRight">
                            <div class="rowUp">
                                <p>陈海浪</p>
                                <img src="./images/jinguan.png">
                            </div>
                            <div class="rowDown">
                                现在用了快半个月了吧，效果很理想，已经瘦了3斤了，以前也减过很多次肥，有过运动有过节食，效果都不怎么样，都不太成功，这次受了那么多，还这么轻松的瘦下来，真的感觉好惊讶，不用那么痛苦的去减肥。
                            </div>
                        </div>
                    </div>
                    <hr class="divider">
                </div>
                <div class="commentDetailContainer">
                    <div class="commentDetail">
                        <div class="colLeft">
                            <img src="./images/avatar04.png">
                        </div>
                        <div class="colRight">
                            <div class="rowUp">
                                <p>丹丹</p>
                                <img src="./images/xiaobai.png">
                            </div>
                            <div class="rowDown">
                                赞同~感觉有用~~
                            </div>
                        </div>
                    </div>
                    <hr class="divider">
                </div>
                <div class="viewMore">
                    <spinner type="bubbles" slot="value" size=""></spinner>
                    <span>查看更多评价</span>
                </div>
            </div>
        </section>
    
    </div>
</template>
<script type="ecmascript-6">
import { Swiper, SwiperItem, Divider } from 'vux'
import { Icon } from 'vux'
import { Spinner } from 'vux'

const imgList = [
    'http://www.pptbz.com/d/file/p/201701/smallffd423a3ab9e735686ff2f099adfe309.jpg',
    'http://img1.gamedog.cn/2011/11/22/14-111122102315-50.jpg',
    'http://www.pptbz.com/d/file/p/201701/small70188852ba4be2e23b26ddb7b14df6f3.jpg'
]

export default {
    components: {
        Swiper,
        SwiperItem,
        Divider,
        Icon,
        Spinner
    },
    created() {

    },
    methods: {
        onIndexChange(index) {
            this.bannerIndex = index
        },
    },
    data() {
        return {
            bannerImg: imgList,
            isShow: false//隐藏底部tab
        }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
width = 100%
color = #fff
// 初始化样式
img, span, a
    display block

// 外层元素
.offlineInfo-wrapper
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
            flex 1
            width width
            height height
            display flex
            align-items center
            a
                display flex
                align-items center
                height height
                padding 0 0.5rem
                span
                    display block
                    color #ea68a2
                    margin-left 0.1563rem
                    getFontsize(26)
        .title
            getFontsize(26)
            font-weight 800
            flex 1
            width width
            text-align center
        .search
            flex 1
            width width
            height height
            display flex
            justify-content flex-end
            a
                display flex
                height height
                padding 0 0.5rem
                align-items center
    // 主体
    .main
        margin-bottom 1.3438rem
        // 分割线
        .divider
            margin 0
            border-top-1px(#f0f0f0)
        // 评论
        .comment
            margin-left 0.5rem
            .titleDown
                height 1.1563rem
                display flex
                align-items center
                justify-content space-between
                .colLeft
                    display flex
                    align-items center
                    p
                        getFontsize(26)
                        color #909090
                        font-weight bold
                    p:last-child
                        margin-left 0.1563rem
                .colRight
                    getFontsize(26)
                    color #ea68a2
                    margin-right 0.625rem
            .commentDetail
                display flex
                margin-top 0.3125rem
                margin-bottom 0.3438rem
                .colLeft
                    margin-right 0.5938rem
                    width 1.1719rem
                    height 1.1719rem
                    img
                        border-radius 50%
                        width 1.1719rem
                        height 1.1719rem
                .colRight
                    margin-top 0.1563rem
                    .rowUp
                        display flex
                        align-items center
                        img
                            display block
                            margin-left 0.0938rem
                        p
                            getFontsize(26)
                    .rowDown
                        getFontsize(26)
                        margin-top 0.1875rem
                        letter-spacing 0.0313rem
                        line-height 0.5rem
                        margin-right 0.625rem
                        text-align justify
                        color #909090
            .viewMore
                color #ea68a2
                display flex
                justify-content center
                align-items center
                height 1.3438rem
                getFontsize(26)
                span
                    display block
                    margin-left 0.1563rem
        // 粗分割线
        .dividerBig
            margin-bottom 0.3125rem
            &:after
                border-width 0.3125rem
                border-color #e0e0e0
        // 线下信息
        .offlineInfo
            .rowUp
                display flex
                height 1.6875rem
                justify-content space-between
                align-items center
                p
                    padding-left 0.5rem
                    getFontsize(32)
                    color #333
                a
                    display flex
                    width 1.875rem
                    justify-content center
                    align-items center
                    flex-direction column
                    img
                        margin-bottom 0.0938rem
                    span
                        getFontsize(20)
            .rowMiddle
                display flex
                height 1.6875rem
                flex-direction column
                justify-content center
                margin-left 0.5rem
                .tel
                    color #ea68a2
                    getFontsize(26)
                .time
                    margin-top 0.2813rem
                    color #909090
                    getFontsize(22)
            .rowDown
                display flex
                height 1.6875rem
                justify-content space-between
                align-items center
                .colLeft
                    display flex
                    flex-direction column
                    justify-content center
                    margin-left 0.5rem
                    .loc
                        color #333
                        getFontsize(26)
                    .dis
                        display flex
                        margin-top 0.2813rem
                        color #909090
                        getFontsize(22)
                .colRight
                    padding-right 0.5rem
            .rowDown:active
                background-color #f0f0f0
</style>