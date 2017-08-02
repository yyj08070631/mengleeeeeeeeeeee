<template>
    <div class="payResult-wrapper">
          <div class="header">
            <div class="header-content border-bottom-1px">
                <a href="javascript:history.back(-1)" class="goBack">
				    <img src="./arrow_left.png">
				    <span>返回</span>
			    </a>
                <h1 class="title">支付成功</h1>
            </div>
        </div> 
        <div class="payType">
            <div></div>
            <div><img src="./success.png"><span>支付成功！</span></div>
            <div></div>
        </div>
        <div class="payPrice">
            <div></div>
            <div>￥36.80</div>
            <div></div>
        </div>
        <div class="gathering">
            <div></div>
            <div><span>收款方：</span><span>梦乐商城</span></div>
            <div></div>
        </div>
        <div class="postButton">完成</div>
    </div>    
</template>
 <script type="ecmascript-6">
export default {
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
.payResult-wrapper 
    width =  100%
    height = 100%
    padding: 1.0938rem 0 1.25rem 0
    width width
    height height
    .header
        headerCss()
    .payType
        display flex
        margin-top 1.7188rem  
        width 100%
        div:first-child,div:last-child
            flex 1
        div:nth-child(2)
            display flex
            align-items center
            img
                width 0.8594rem
                height 0.8594rem 
            span
                flex 1
                margin-left 0.4063rem
                font-size 0.5313rem
                vertical-align top  
                color #fb8800    
    .payPrice
        display flex
        margin-top 1.0625rem
        align-items center
        div
            flex 1
        div:nth-child(2)
            font-size 0.7188rem     
    .gathering
        display flex
        margin-top 0.3438rem
        align-items center
        div:first-child,div:last-child
            flex 1
        div:nth-child(2)
            display flex
            span
                flex 1
                font-size 0.4063rem 
            span:first-child 
                color #909090
            span:last-child 
                color #40474e 
    .postButton
        margin 1.875rem auto 0 auto 
        width 8.3438rem    
        height 1.25rem  
        line-height 1.25rem  
        font-size 0.4688rem
        text-align center
        color #fff
        background #fb8800  
        border-radius 0.1875rem
                 
                                    
</style>
