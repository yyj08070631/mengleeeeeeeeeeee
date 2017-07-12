<template>
    <div class="goodsData-wrapper">
         <div class="header">
            <div class="header-content border-bottom-1px">
                <a href="javascript:history.back(-1)" class="goBack">
				    <img src="./arrow_left.png" height="16">
				    <span>返回</span>
			    </a>
                <h1 class="title">产品参数</h1>
                <img class="search" src="./search.png" width="16" height="16"/>
            </div>
        </div>
        <div class="activity-wrapper">
                <div class="activity-title">
                    <img src="./activity01.png" width=100% height=auto>
                </div>
        </div>
        <footer class="myFooter">
			<a href="javascript:void(0)">
				<img src="./share.png" height="16">
				<p>分享</p>
			</a>
			<a href="javascript:void(0)">
				<img src="./collect.png" height="16">
				<p>加入收藏</p>
			</a>
			<a href="javascript:void(0)">加购物袋</a>
			<a href="javascript:void(0)">立即购买</a>
		</footer>
    </div>
</template>
<script type="ecmascript-6">
export default {
  
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
.goodsData-wrapper 
    width =  100%
    height = 100%
    .header
        headerCss()
    .content-wrapper
        margin: 40px 0 38px 16px
        .content-item
            padding: 13px 16px 13px 0
            border-bottom-1px(#e0e0e0)
            .title
                font-size: 13px
                line-height: 20px
                font-weight: bold
                color: #333
            .desc   
                font-size: 11px
                line-height: 20px
                color: #909090
            ul
                margin-left: 16px
                li
                    list-style: disc 
                    font-size: 11px
                    line-height: 20px
                    color: #909090    
    .myFooter
        position fixed
        bottom 0
        right 0
        display flex
        align-items center
        justify-content flex-end
        height 38px
        width width
        background-color #f9f9f9
        border-top 1px solid #e0e0e0
        >a:nth-child(1)
        >a:nth-child(2)
            display flex
            justify-content center
            align-items center
            flex-direction column
            border-left 1px solid #e0e0e0
            flex 1
            height 100%
            p
                color #646464
                font-size 0.5625rem
                margin-top 3px
        >a:nth-child(3)
            display flex
            width 5.875rem
            justify-content center
            align-items center
            font-size 0.875rem
            font-weight bold
            color #fff
            background-color #f19fc2
            height 100%
        >a:nth-child(4)
            display flex
            width 6.375rem
            justify-content center
            align-items center
            font-size 0.875rem
            font-weight bold
            color #fff
            background-color #ea6aa2
            height 100%
</style>
