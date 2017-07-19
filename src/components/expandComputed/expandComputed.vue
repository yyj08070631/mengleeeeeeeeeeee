<template>
    <div class="expand-wrapper">
        <div class="header">
            <div class="header-content border-bottom-1px">
                <a href="javascript:history.back(-1)" class="goBack">
				    <img src="./arrow_left.png" height="16">
				    <span>返回</span>
			    </a>
                <h1 class="title">拓展统计</h1>
                <a href="#search"><img class="search" src="./search.png"/></a>
             </div>
        </div>     
        <div class="expand-board">
            <span class="rank-title">拓展总收益（元）</span>
            <h1 class="myExpand">38,366.20</h1>
        </div>
        <div class="content-wrapper">
            <a href="javascript:void(0)" class="get-expand">
                    <span class="title">我的团队</span>
                    <div class="link-wrapper">
                        <img class="more" width=16 height=16 src="./more.png">
                    </div>
            </a>
            <div class="line"></div>
            <a href="javascript:void(0)" class="expand-computed border-bottom-1px">
                    <span class="computed">本月</span>
                    <div class="link-wrapper">
                        <span>获得：</span><span class="number">6880.00</span>
                        <span>已到账</span>
                    </div>
            </a>
            <a href="javascript:void(0)" class="expand-item">
                    <div class="expand-msg">
                        <span class="from">Duke消费-直属</span>
                        <span class="date">2017-6-14</span>
                    </div>
                    <span class="get-number">+2000.00</span>
            </a>  
            <a href="javascript:void(0)" class="expand-item">
                    <div class="expand-msg">
                        <span class="from">时光鸡消费-间接</span>
                        <span class="date">2017-6-14</span>
                    </div>
                    <span class="get-number">+1000.00</span>
            </a>  
            <a href="javascript:void(0)" class="expand-item">
                    <div class="expand-msg">
                        <span class="from">鼎茗茶行消费-间接</span>
                        <span class="date">2017-6-14</span>
                    </div>
                    <span class="get-number">+400.00</span>
            </a>  
            <a href="javascript:void(0)" class="expand-item">
                    <div class="expand-msg">
                        <span class="from">陈志洪消费-间接</span>
                        <span class="date">2017-6-14</span>
                    </div>
                    <span class="get-number">+80.00</span>
            </a>  
            <a href="javascript:void(0)" class="expand-item">
                    <div class="expand-msg">
                        <span class="from">友善猪消费-直属</span>
                        <span class="date">2017-6-14</span>
                    </div>
                    <span class="get-number">+80.00</span>
            </a>      
        </div>
        
    </div>
</template>
<script type="ecmascript-6">
export default {
  
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
    width = 100%
    .expand-wrapper
        margin-top: 1.0938rem
        padding-bottom: 3.125rem
        width: 100%
        height: 100%
        font-size: 0
        overflow-x: hidden
        background: #f0f0f0
        .header
            headerCss()
        .expand-board
            padding: 0.8438rem 0 0 0.5625rem
            width: width
            height: 3.5313rem
            background: #ea6aa2
            color: #fff
            .rank-title
                font-size: 0.4063rem
                vertical-align: top
            .myExpand
                margin-top: 0.75rem
                font-size: 1.6875rem
        .content-wrapper
            width: 100%
            height: 100%
            background: #fff
            overflow-x: hidden        
            .get-expand
                display: block
                position: relative
                margin-left: 0.5rem
                width: 100%
                height: 1.3438rem
                line-height: 1.3438rem
                background: #fff
                font-size: 0
                border-bottom-1px(#e0e0e0)
                .title
                    float: left 
                    font-size: 0.4063rem
                    color: #333
                .link-wrapper
                    float: right
                    margin: 0 0.875rem 0 0
                    height: 100%
                    .more
                        margin: 0.375rem 0 0 0.25rem
                        width: 0.375rem
                        height: 0.375rem
        .line                     
            width: 100%
            height: 0.3125rem
            background: #f0f0f0
        .expand-computed
            display: block
            margin-left: 0.5rem
            width: 100%
            height: 1.1563rem
            background: #fff
            border-bottom-1px(#e0e0e0)
            .computed
                display: inline-block
                margin: 0.375rem 0 0 0
                height: 0.4375rem
                border-left: 0.0938rem solid #909090
                font-size: 0.4063rem
                font-weight: bold
                text-indent: 0.1563rem
                color: #909090
            .link-wrapper
                float: right
                margin: 0 1rem 0 0
                height: 100%
                line-height: 1.1563rem
                font-size: 0.4063rem
                span 
                    float: left
                    color: #333
                .number
                    float: left
                    color: #ea68a2
        .expand-item
                display: block
                position: relative
                margin-left: 0.5rem
                width: 100%
                height: 1.6875rem
                line-height: 1.3438rem
                background: #fff
                font-size: 0
                border-bottom-1px(#e0e0e0)
                .expand-msg
                    display: inline-block
                    width: 3.75rem
                    height: 100%
                    overflow: hidden
                    .from
                        margin: -0.1875rem 0 0 0
                        float: left 
                        height: 0.4063rem
                        font-size: 0.4063rem
                        color: #333
                    .date
                        margin: 0.1875rem 0 0 0
                        float: left
                        font-size: 0.3438rem
                .get-number
                    margin-right: 1.125rem
                    float: right
                    line-height: 1.6875rem 
                    font-size: 0.4063rem    
                    color: #333    
</style>

