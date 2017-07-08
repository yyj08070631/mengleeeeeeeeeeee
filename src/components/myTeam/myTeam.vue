<template>
    <div class="myTeam-wrapper">
        <!--头部-->    
        <header class="header">
			<a href="javascript:history.back(1)" class="goBack">
				<img src="./images/arrow_left.png" height="16">
				<span>返回</span>
			</a>
			<div class="title">商品详情</div>
			<div class="search">
				<img class="searchImg" src="./images/search.png" width="16" height="16">
			</div>
		</header>
        <!--主体-->
        <section class="main">
            <div class="overview">
                <p>概况</p>
                <div>
                    <p>直属：100</p>
                    <p>间接：500</p>
                </div>
            </div>
            <div></div>
        </section>
    </div>
</template>
<script type="ecmascript-6">
export default {

}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
width = 100%
color = #fff
.myTeam-wrapper
    position absolute
    top 2.5rem
    left 0
    width width
    background #fff
    // 头部
    .header
        border-bottom-1px(#e0e0e0)
        position fixed
        display flex
        top 0
        left 0
        justify-content space-between
        align-items center
        height 2.5rem
        width width
        background-color #f9f9f9
        z-index 1
        .goBack
            font-size 0.3125rem
            margin-left 16px
            flex 1
            width width
            display flex
            align-items center
            span
                display block
                color #ea68a2
                margin-left 5px
                font-size 0.8125rem
            img
                display block
        .title
            font-size 0.8125rem
            font-weight 800
            flex 1
            width width
            text-align center
        .search
            margin-right 16px
            flex 1
            width width
            text-align right
    // 分割线
    .divider
        margin 0
        border-left 0
        border-right 0
        border-bottom 0
        border-top 1px solid #e0e0e0
    // 粗分割线
    .dividerBig
        border-width 10px
        border-color #f0f0f0
    // 主体
    .main
        .overview
            display flex
            height 36px
            background-color #f0f0f0
            justify-content space-between
            align-items center
            > p
                padding-left 16px
                color #333
                font-size 0.8125rem
            div
                display flex
                margin-right 16px
                font-size 0.75rem
                color #909090
                p
                    margin-left 15px
</style>

