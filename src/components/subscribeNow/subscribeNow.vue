<template>
    <div class="subscribe-wrapper">
        <v-view class="route-item"></v-view>
        <div class="header">
            <div class="header-content border-bottom-1px">
                <a href="javascript:history.back(-1)" class="goBack">
				    <img src="./arrow_left.png" height="16">
				    <span>返回</span>
			    </a>
                <h1 class="title">我要预约</h1>
                <a href="#search"><img class="search" src="./search.png"/></a>
            </div>
        </div> 
        <div class="activity-wrapper">
            <div class="subscribe-item">
                <div class="pullLeft">服务</div>
                <div class="pullRight"><P>单人泡澡+臀部疗保养+面部补水三项套餐</P></div>
            </div>
             <div class="subscribe-item">
                <div class="pullLeft noLine">预约人信息</div>
                <div class="pullRight">
                    <div class="userinfo">
                        <div class="msg">
                            <span>陈军宝</span>
                            <span>13560433216</span>
                        </div>
                        <a href="#" class="write">编辑</a>
                    </div>
                </div>
            </div>
             <div class="subscribe-item">
                <div class="pullLeft noLine">时间</div>
                <div class="pullRight"><P>单人泡澡+臀部疗保养+面部补水三项套餐</P></div>
            </div>
             <div class="subscribe-item">
                <div class="pullLeft noLine">地点</div>
                <div class="pullRight noLine"><P>单人泡澡+臀部疗保养+面部补水三项套餐</P></div>
            </div>
        </div>
        <div class="subscribe">
                <div>确定预约</div>
                <div>取消预约</div>
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
            .subscribe-item
                display: flex
                margin-left: 0.5rem
                width: 100%
                height: 1.625rem
                div
                    font-size: 0.3438rem
                    border-bottom-1px(#e0e0e0)
                .noLine
                    border-bottom-none()
                .pullLeft
                    width: 3.125rem
                    line-height: 1.625rem
                    color: #909090
                .pullRight
                    flex: 1
                    margin-right: 0.5rem
                    p    
                        margin: 0.4688rem 0.5rem 0 0 
                    .userinfo
                        width: 100%
                        margin-bottom: 0.25rem
                        .msg
                            float: left
                            width: 2.3438rem
                            height: 1.25rem
                            margin-top: 0.3125rem
                            border-bottom-none()
                            span   
                                height: 0.4688rem
                                display: inline-block
                                float: left   
                                line-height: 0.4688rem !important
                         .write
                            margin-right: 0.5rem
                            float: right       
                            color: #ea6aa2
                            line-height: 1.625rem
        .subscribe
            display: flex
            width: 100%
            height: 1.0938rem  
            line-height: 1.0938rem  
            background: #fff 
            border-top-1px(#e0e0e0)
            div:first-child
                color: #ea6aa2
                border-right: 1px solid #e0e0e0 
            div:last-child
                color: #909090  
            div
                flex: 1
                font-size: 0.4063rem 
                text-align: center
</style>

