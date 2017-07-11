<template>
    <div class="digest-wrapper">
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
        <div class="line"></div>
        <div class="serve-date">
            <span class="date">时间</span>
            <div class="details">
                <span>2017年6月28日 星期三</span>
                <span class="mg-top">提前一天</span>
            </div>
        </div>
        <div class="serve-address">
            <span class="date">地址</span>
            <div class="details  none-line">
                <span>完美尺寸 天誉花园店</span>
                <span class="mg-top">广州市天河区林和中路136号</span>
                <span class="mg-top">广州市天河区林和中路136号</span>
            </div>
        </div>
        <div class="line"></div>
        <a href="#" class="link">我要预约</a>
    </div>
</template>
<script type="ecmascript-6">
export default {
  
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import '../../commom/stylus/mixin'
    .digest-wrapper
        width: 100%
        height: 100%
        .header
            headerCss()
        .serve
            width: 100%
            height: 214px
            background: url(./serve.png)
            background-size: 100% 214px
        .serve-desc
            width: 100%
            .desc-title
                line-height: 30px
                text-indent: 16px
                font-size: 12px
                color: #333               
            .desc-content
                display: inline-block
                margin: 0 16px 0 16px
                line-height: 20px
                font-size: 11px
                color: #909090 
        .line     
            margin: 13px 0    
            width: 100%
            margin-left: 16px
            border-bottom-1px(#e0e0e0)
        .serve-address
            margin-top: -9px    
        .serve-date,.serve-address
            width: 100%
            height: 64px
            .date  
                display: inline-block
                margin: 13px  0 0 16px
                font-size: 13px        
                color: #909090
            .details
                padding: 13px 0
                float: right
                width: 197px
                font-size: 11px
                letter-spacing: 2px
                border-bottom-1px(#e0e0e0)
                color: #333
                .mg-top
                    display: block
                    margin-top: 5px
                    font-size: 11px
            .none-line
                border-bottom-none()    
        .link
            display: block
            margin-top: 23px 
            width: 100%
            font-size: 13px
            text-align: center
            color: #ea6aa2           
                    


             
</style>
