<template>
    <div class="integral-wrapper">
        <div class="header">
            <div class="header-content border-bottom-1px">
                <a href="javascript:history.back(-1)" class="goBack">
				    <img src="./arrow_left.png" height="16">
				    <span>返回</span>
			    </a>
                <h1 class="title">我的积分</h1>
                <img class="search" src="./search.png" width="16" height="16"/>
             </div>
        </div>     
        <div class="integral-board">
            <span class="rank-title">皇冠会员</span>
            <span class="rank-question">等级特权?</span>
            <h1 class="myIntegral">58000</h1>
        </div>
        <a href="javascript:void(0)" class="get-integral indent">
                <span class="title">我要赚积分</span>
                <div class="link-wrapper">
                    <img class="more" width=16 height=16 src="./more.png">
                </div>
        </a>
        <a href="javascript:void(0)" class="integral-computed border-bottom-1px">
                <span class="computed">本月</span>
                <div class="link-wrapper">
                    <span>获得：</span><span class="number">18360</span>
                </div>
        </a>
        <a href="javascript:void(0)" class="integral-item">
                <div class="integral-msg">
                    <span class="from">团队积分</span>
                    <span class="date">2017-6-14</span>
                </div>
                <span class="get-number">+17800</span>
        </a>  
        <a href="javascript:void(0)" class="integral-item">
                <div class="integral-msg">
                    <span class="from">商城消费</span>
                    <span class="date">2017-6-14</span>
                </div>
                <span class="get-number">+17800</span>
        </a>  
        <a href="javascript:void(0)" class="integral-item">
                <div class="integral-msg">
                    <span class="from">商城消费</span>
                    <span class="date">2017-6-14</span>
                </div>
                <span class="get-number">+17800</span>
        </a>  
        <a href="javascript:void(0)" class="integral-item">
                <div class="integral-msg">
                    <span class="from">团队积分</span>
                    <span class="date">2017-6-14</span>
                </div>
                <span class="get-number">+17800</span>
        </a>  
        <a href="javascript:void(0)" class="integral-item">
                <div class="integral-msg">
                    <span class="from">团队积分</span>
                    <span class="date">2017-6-14</span>
                </div>
                <span class="get-number">+17800</span>
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
    .integral-wrapper
        margin-top: 40px
        padding-bottom: 100px
        width: 100%
        height: 100%
        font-size: 0
        overflow-x: hidden
        background: #f0f0f0
        .header
            headerCss()
        .integral-board
            padding: 27px 0 0 18px
            width: width
            height: 113px
            background: #ea6aa2
            color: #fff
            .rank-title
                float: left    
                font-size: 13px
                vertical-align: top
            .rank-question
                display: inline-block
                margin-left: 10px
                margin-top: -1.5px
                width: 66.5px
                font-size: 11px
                text-align: center
                border: 1px solid #fff
                border-radius: 10px   
                vertical-align: top
            .myIntegral
                margin-top: 24px
                font-size: 54px
        .get-integral
            display: block
            position: relative
            width: 100%
            height: 2.6875rem
            line-height: 2.6875rem
            background: #fff
            font-size: 0
            border-bottom-1px(#e0e0e0)
            .title
                margin-left: 1rem
                float: left 
                font-size: 0.8125rem
                color: #333
            .link-wrapper
                float: right
                margin: 0 0.5rem 0 0
                height: 100%
                .more
                    margin: 0.75rem 0 0 0
        .indent
            margin-bottom: 0.625rem
    .integral-computed
        display: block
        width: 100%
        height: 2.3125rem
        background: #fff
        border-bottom-1px(#e0e0e0)
        .computed
            display: inline-block
            margin: 0.75rem 0 0 1rem
            height: 0.875rem
            border-left: 0.1875rem solid #909090
            font-size: 0.8125rem
            font-weight: bold
            text-indent: 5px
            color: #909090
        .link-wrapper
            float: right
            margin: 0 1rem 0 0
            height: 100%
            line-height: 2.3125rem
            font-size: 0.8125rem
            .number
                color: #ea68a2
    .integral-item
            display: block
            position: relative
            width: 100%
            height: 3.375rem
            line-height: 2.6875rem
            background: #fff
            font-size: 0
            border-bottom-1px(#e0e0e0)
            .integral-msg
                display: inline-block
                width: 120px
                height: 100%
                overflow: hidden
                .from
                    margin: -3px 0 0 16px
                    float: left 
                    height: 13px
                    font-size: 0.8125rem
                    color: #333
                .date
                    margin: 6px 0 0 16px
                    float: left
                    font-size: 11px
            .get-number
                margin-right: 16px
                float: right
                line-height: 3.375rem 
                font-size: 13px    

</style>

