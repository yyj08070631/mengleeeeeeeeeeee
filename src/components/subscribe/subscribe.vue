<template>
    <div class="subscribe-wrapper">
         <!--头部  -->
        <v-header></v-header>
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
            </a>
            <div class="info">
                <p>查看详细信息</p>
            </div>
            <div class="line"></div>
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
            </a>
            <div class="info">
                <div><a href="javascript:void(0)">再次购买</a></div>
                <div><a href="javascript:void(0)">去评价</a></div>
            </div>
            <div class="line"></div>
        </div>
        <!-- footer -->
        <v-view class="route-item"></v-view>     
    </div>
</template>
<script type="ecmascript-6">
import view from '../../components/view/view';
import header from '../../components/header/header';
export default {
    components :{
        'v-view': view,
        'v-header': header
    } 
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
  width = 100%
  color = #fff
  .subscribe-wrapper
        position: absolute
        top: 1.4063rem
        left: 0
        margin-bottom: 0.6719rem
        width: width
        height: 100%
        font-size: 0
        overflow: hidden
        .route-item
            footerCss()
        .header
           headerCss()
        .activity-wrapper
            width: width
            background: #fff
            .activity-item
                display: flex
                position: relative
                margin-left: 0.5rem
                width: width
                height: 2.75rem
                .picture
                    margin: 0.4688rem 0.3125rem 0.4688rem 0
                    img
                        width: 2.0938rem
                        height: 2.0938rem
                .content
                    width: 100%
                    margin-top: 0.4688rem
                    margin-right: 0.4375rem
                    p:first-child
                        margin-bottom: 0.375rem
                        font-size: 0.375rem
                        color: #333
                        width: 90%
                        height: 0.5rem
                        white-space: nowrap
                        overflow: hidden
                        text-overflow: ellipsis
                    p
                        line-height: 0.5625rem
                        font-size: 0.375rem
                        color: #909090                          
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
                        
             .info
                width: 100%
                height: 1.1563rem   
                p
                    margin-right: 0.4375rem
                    line-height: 0.9375rem
                    font-size: 0.375rem
                    text-align: right
                    color: #ea68a2
                div
                    margin-right: 0.2188rem
                    a
                        font-size: 0.375rem
                        color: #fff
                        width: 1.8438rem
                        height: 0.5625rem
                        line-height: 0.5625rem
                        text-align: center
                        background: #ea68a2
                        border-radius: 0.1563rem
                        float: right
                    a:first-child
                        margin: 0.2813rem 0.4375rem 0 0  
                    a:last-child
                        margin: 0.2813rem 0.2188rem 0 0  
            .line
                margin-left: 0.4375rem
                width: 100%
                height: 0.0313rem  
                background: #e0e0e0        

                        

</style>

