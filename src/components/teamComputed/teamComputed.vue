<template>
    <div class="title-wrapper">
        <div class="header">
            <div class="header-content border-bottom-1px">
                <a href="javascript:history.back(-1)" class="goBack">
				    <img src="./arrow_left.png">
				    <span>返回</span>
			    </a>
                <h1 class="title">团队统计</h1>
                <img class="search" src="./search.png"/>
             </div>
        </div>     
        <div class="title-board">
            <span class="rank-title">团队总收益（元）</span>
            <h1 class="myTitle">0.00</h1>
        </div>
        <a href="javascript:void(0)" class="get-title indent">
                <span class="title">我的团队</span>
                <div class="link-wrapper">
                    <img class="more" width=16 height=16 src="./more.png">
                </div>
        </a>
        <a href="javascript:void(0)" class="title-computed border-bottom-1px">
                <span class="computed">本月</span>
                <div class="link-wrapper">
                    <span>获得：</span><span class="number">1500500.00</span>
                    <span class="state">未激活</span>
                </div>
        </a>
        <a href="javascript:void(0)" class="title-item">
                <div class="title-msg">
                    <span class="from">Duke团队业绩</span>
                    <span class="date">团队人数：134人</span>
                </div>
                <span class="get-number">530020.00</span>
        </a>  
        <a href="javascript:void(0)" class="title-item">
                <div class="title-msg">
                    <span class="from">友善猪团队业绩</span>
                    <span class="date">团队人数：0人</span>
                </div>
                <span class="get-number">269.00</span>
        </a>  
        <a href="javascript:void(0)" class="title-item">
                <div class="title-msg">
                    <span class="from">miley团队业绩</span>
                    <span class="date">团队人数：0人</span>
                </div>
                <span class="get-number">369.00</span>
        </a>  
        <a href="javascript:void(0)" class="title-item">
                <div class="title-msg">
                    <span class="from">AAA拼单平价潮衣物品团队业绩</span>
                    <span class="date">团队人数：3人</span>
                </div>
                <span class="get-number">1360.00</span>
        </a>  
        <a href="javascript:void(0)" class="title-item">
                <div class="title-msg">
                    <span class="from">A欧阳飞刀团队业绩</span>
                    <span class="date">2017-6-14</span>
                </div>
                <span class="get-number">+80.00</span>
        </a>  
    </div>
</template>
<script type="ecmascript-6">
export default {
  
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
    width = 100%
    .title-wrapper
        margin-top: 1.0938rem
        width: 100%
        height: 100%
        font-size: 0
        overflow-x: hidden
        background: #f0f0f0
        .header
            headerCss()
        .title-board
            padding: 0.8438rem 0 0 0.5625rem
            width: width
            height: 3.5313rem
            background: #ea6aa2
            color: #fff
            .rank-title
                font-size: 0.4063rem
                vertical-align: top
            .myTitle
                margin-top: 0.75rem
                font-size: 1.6875rem
        .get-title
            display: block
            position: relative
            width: 100%
            height: 1.3438rem
            line-height: 1.3438rem
            background: #fff
            font-size: 0
            border-bottom-1px(#e0e0e0)
            .title
                margin-left: 0.5rem
                float: left 
                font-size: 0.4063rem
                color: #333   
            .link-wrapper
                float: right
                margin: 0 0.25rem 0 0
                height: 100% 
                .more
                    margin: 0.375rem 0 0 0.25rem 
                    width: 0.1875rem
                    height: 0.1875rem        
        .indent
            margin-bottom: 0.625rem
    .title-computed
        display: block
        width: 100%
        height: 1.1563rem
        background: #fff
        border-bottom-1px(#e0e0e0)
        .computed
            display: inline-block
            margin: 0.375rem 0 0 0.5rem
            height: 0.4375rem
            border-left: 0.0938rem solid #909090
            font-size: 0.4063rem
            font-weight: bold
            text-indent: 0.1563rem
            color: #909090
        .link-wrapper
            float: right
            margin: 0 -0.3125rem 0 0
            width: 5.625rem
            height: 100%
            line-height: 1.1563rem
            font-size: 0.4063rem
            span
                float: left
                color: #333
            .number
                float: left
                color: #ea68a2
            .state
                display: inline-block
                margin: 0.25rem 0 0 0.1875rem
                padding: 0 0.0625rem
                height: 0.625rem
                line-height: 0.625rem
                font-size: 0.375rem
                color: #fff
                background: #909090
                border-radius: 0.0938rem 
    .title-item
            display: block
            position: relative
            width: 100%
            height: 1.6875rem
            line-height: 1.3438rem
            background: #fff
            font-size: 0
            border-bottom-1px(#e0e0e0)
            .title-msg
                display: inline-block
                width: 3.75rem
                height: 100%
                overflow: hidden
                .from
                    margin: -0.0938rem 0 0 0.5rem
                    float: left 
                    height: 0.4063rem
                    font-size: 0.4063rem
                    color: #333
                .date
                    margin: 0.1875rem 0 0 0.5rem
                    float: left
                    font-size: 0.3438rem
            .get-number
                margin-right: 0.5rem
                float: right
                line-height: 1.6875rem 
                font-size: 0.4063rem    
                color: #333    
</style>

