<template>
    <div class="payResult-wrapper">
        <!-- 头部 -->
        <!-- <v-header></v-header> -->
        <div class="payType">
            <div><img src="./successyo.png"><span>支付成功！</span></div>
        </div>
        <div class="payPrice">￥{{price}}</div>
        <div class="gathering">
            <div></div>
            <div><span>收款方：</span><span>梦乐商城</span></div>
            <div></div>
        </div>
        <router-link to="/orderFrom" class="postButton">
            <a href="javascript:void(0)">完成</a>
        </router-link>
    </div>
</template>
<script type="ecmascript-6">
// import header from '../../components/header/header';
export default {
    components: {
        // 'v-header': header
    },
    data() {
        return {
            price: this.$route.query.price
        }
    },
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
.payResult-wrapper
    padding: 1.4063rem 0 1.25rem 0
    width 100%
    height 100%
    .payType
        display flex
        justify-content center
        margin-top 1.7188rem  
        width 100%
        div
            display flex
            align-items center
            img
                width 0.8594rem
            span
                margin-left 0.25rem
                font-size fs + 0.0938rem
                vertical-align top
                color #ea68a2
    .payPrice
        display flex
        align-items center
        justify-content center
        margin-top 1.0625rem
        margin-bottom 0.3438rem
        font-size fs + 0.2813rem
        color #40474e
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
                font-size fs - 0.0313rem
            span:first-child 
                color #909090
            span:last-child 
                color #40474e 
    .postButton
        display flex
        justify-content center
        align-items center
        width 8.3438rem
        height 1.25rem
        margin 1.875rem auto 0 auto 
        text-align center
        background #ea68a2  
        border-radius 0.1875rem
        a
            display block
            font-size fs + 0.0313rem
            color #fff
</style>
