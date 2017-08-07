<template>
    <div class="payResult-wrapper">
          <!--头部  -->
        <v-header></v-header>
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
        <router-link to="/goods" class="postButton">完成</router-link>
    </div>    
</template>
 <script type="ecmascript-6">
import header from '../../components/header/header';
export default {
    components: {
        'v-header': header
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
.payResult-wrapper 
    width =  100%
    height = 100%
    padding: 1.4063rem 0 1.25rem 0
    width width
    height height
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
