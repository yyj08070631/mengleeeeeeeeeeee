<template>
    <div class="subscribe-wrapper">
        <v-view class="route-item"></v-view>
        <div class="header">
            <div class="header-content border-bottom-1px">
                <a href="javascript:history.back(-1)" class="goBack">
				    <img src="./arrow_left.png" height="16">
				    <span>返回</span>
			    </a>
                <h1 class="title">我的预约</h1>
                <a href="#search"><img class="search" src="./search.png"/></a>
            </div>
        </div> 
        <div class="activity-wrapper">
            <a href="#subscribeNow" class="activity-item">
                <div class="picture">
                    <img src="./activity.png"/>
                </div>
                <div class="content">
                    <p>单人泡澡+臀部疗保养+面部补水三项套餐</p>
                    <p>2017年6月28日 星期三</p>
                    <p>完美尺寸 天誉花园店</p>
                </div>
                <div class="info">
                    <p>查看详细信息</p>
                </div>       
            </a>
            <a href="#subscribeNow" class="activity-item">
                <div class="picture">
                    <img src="./activity.png"/>
                </div>
                <div class="content">
                    <p>单人泡澡+臀部疗保养+面部补水三项套餐</p>
                    <p>2017年6月28日 星期三</p>
                    <p>完美尺寸 天誉花园店</p>
                </div>
                <div class="info">
                    <div>再次预约</div>
                    <div>去评价</div>
                </div>       
            </a>
        </div>
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
  width = 100%
  color = #fff
  .subscribe-wrapper
        position: absolute
        top: 1.0938rem
        left: 0
        margin-bottom: 0.6719rem
        width: width
        font-size: 0
        overflow: hidden
        background: #efeff8
        .route-item
            footerCss()
        .header
           headerCss()
        .activity-wrapper
            width: width
            height: 100%
            background: #fff
            .activity-item
                display: flex
                position: relative
                margin-left: 0.5rem
                width: width
                height: 2.625rem
                border-bottom-1px(#e0e0e0)
                .picture
                    margin: 0.4688rem 0.3125rem 0.4688rem 0
                    img
                        width: 1.625rem
                        height: 1.625rem
                .content
                    margin-top: 0.4688rem
                    p:first-child
                        font-size: 0.375rem
                        color: #333
                    p
                        line-height: 0.5625rem
                        font-size: 0.375rem
                        color: #909090        
                .info 
                    display: flex
                    position: absolute
                    right: 1rem
                    bottom: 0.5rem
                    p
                        margin-top: 0.0938rem
                        text-align: right
                        font-size: 0.3438rem
                        color: #ea68a2
                        line-height: 0.625rem
                    div:first-child
                        margin-right: 0.1563rem                        
                    div
                        margin-bottom:  -0.0781rem
                        width: 1.5625rem
                        height: 0.4688rem
                        line-height: 0.4688rem
                        font-size: 0.3438rem
                        background: #ea68a2
                        border-radius: 0.0781rem
                        color: #fff
                        text-align: center
                        
</style>

