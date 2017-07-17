<template>
    <div class="digest-wrapper">
        <v-view class="route-item"></v-view>
        <div class="header">
            <div class="header-content border-bottom-1px">
                <a href="javascript:history.back(-1)" class="goBack">
				    <img src="./arrow_left.png" height="16">
				    <span>返回</span>
			    </a>
                <h1 class="title">摘要</h1>
                <img class="search" src="./search.png" width="16" height="16"/>
            </div>
        </div>
        <div class="serve"></div>
        <div class="serve-desc">
            <h2 class="desc-title">单人泡澡+臀部疗保养+面部补水三项套餐</h2>
            <span class="desc-content">
                岁月就像一条河，左岸是无法忘却的回忆，右岸是值得把握的当下，中间飞快流淌的是容颜的变迁。完美尺寸让岁月在您的容颜上止步。给一点时间，泡澡+臀部保养+面部补水，让过去的过去，让开始的
开始，让时间稍作休息。
            </span>
        </div>
        <div class="divider"></div>
        <div class="serve-date-address">
            <span class="date">时间</span>
            <div class="details">
                <span>2017年6月28日 星期三</span>
                <span class="mg-top">提前一天</span>
            </div>
        </div>
        <div class="divider"></div>
        <div class="serve-date-address">
            <span class="date">地址</span>
            <div class="details">
                <span>完美尺寸 天誉花园店</span>
                <span class="mg-top">广州市天河区林和中路136号 天誉花园2期 101铺</span>
            </div>
        </div>
        <div class="divider"></div>
        <a href="javascript:void(0)" class="link">我要预约</a>
    </div>
</template>
<script type="ecmascript-6">
import view from '../../components/view/view';
export default {
    components :{
        'v-view': view
    } 
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import '../../commom/stylus/mixin'
    // init
    *
        letter-spacing 0.0313rem
    img, span, a
        display block
    changeDividerMargin($n)
        margin-left $n

    .digest-wrapper
        margin-bottom: 1.3438rem
        width: 100%
        height: 100%
        .divider
            border-top-1px(#e0e0e0)
        .dividerMargin16px
            changeDividerMargin(0.5rem)
        .dividerMarginpx
        .route-item
            footerCss()
        .header
            headerCss()
        .serve
            width: 100%
            height: 6.6875rem
            margin-top 1.0938rem
            background: url(./serve.png)
            background-size: 100% 6.6875rem
        .serve-desc
            display flex
            flex-direction column
            justify-content center
            margin 0 0.5rem
            .desc-title
                margin 0.5625rem 0 0.4375rem 0
                font-size 0.3438rem
                color #333
            .desc-content
                margin-bottom 0.4688rem
                font-size 0.3438rem
                color #909090
                line-height 0.4688rem
                text-align justify
        .serve-date-address
            display flex
            .date
                width 3.3125rem
                margin 0.5313rem 0 0 0.5rem
                font-size 0.3438rem
                color #909090
            .details
                height 1.9688rem
                width 5.6875rem
                margin-top 0.5313rem
                font-size 0.3438rem
                color #333
                .mg-top
                    margin-top 0.3125rem
                    line-height 0.4688rem
                    text-align justify
        .link
            display flex
            justify-content center
            height 1.875rem
            padding-top 0.4375rem
            font-size 0.4063rem
            color #ea68a2
</style>
