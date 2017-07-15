<template>
    <div class="myCenter-wrapper">
        <v-view class="route-item"></v-view>
      <!--头部  -->
        <div class="header">
            <div class="header-content border-bottom-1px">
                <h1 class="title">个人中心</h1>
                <img class="search" src="./search.png">
            </div>
        </div>
      <!--头部  -->  
      <!--个人资料-->
        <a class="personal-wrapper" href="#settings">
            <img class="avator" src="./avatar.png">
            <div class="personal">
                <h2 class="name">陈宝军</h2>
                <span class="mobile">13560433216</span>
                <img class="rank" src="./rank.png">
            </div>

            <div class="more-link">
                <img class="qr-code" width=32 height=32 src="./QR_code.png">
                    <img width=32 height=32 src="./more.png">
            </div>
        </a>
      <!--个人资料-->
      <!--账单积分-->
        <div class="notecase-wrapper">
                <a href="#bill" class="item-cls">我的账单<img class="more" width=32 height=32 src="./more.png"></a>
                <a href="#integral" class="item-cls"><span class="num">58,000积分</span>我的积分<img class="more" width=32 height=32 src="./more.png"></a>
                <a href="javascript:void(0)" class="item-cls"><span class="num">3,480元</span>我的钱包<img class="more" width=32 height=32 src="./more.png"></a> 
        </div>
      <!--账单积分-->
      <!--我的预约-->
        <div class="order-wrapper">
            <a href="#offlineInfo" class="item-cls">我的预约<img class="more" width=32 height=32 src="./more.png"></a>
        </div>
      <!--我的预约-->
        <div class="team-wrapper">
            <a href="#myTeam" class="item-cls">我的团队<img class="more" width=32 height=32 src="./more.png"></a>
            <a href="#titleComputed" class="item-cls">头衔统计<img class="more" width=32 height=32 src="./more.png"></a>
            <a href="#expandComputed" class="item-cls">拓展统计<img class="more" width=32 height=32 src="./more.png"></a>
            <a href="#teamComputed" class="item-cls">团队统计<img class="more" width=32 height=32 src="./more.png"></a>
        </div>
     <!--我的预约-->       
        <div class="helper">
            <a href="#goodDetail" class="item-cls">获得帮助<img class="more" width=32 height=32 src="./more.png"></a>
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
  .myCenter-wrapper
        position: absolute
        top: 1.0938rem
        left: 0
        margin-bottom: 0.6719rem
        width: width
        font-size: 0
        overflow: hidden
        background: #f0f0f0
        .route-item
            footerCss()
        .header
           headerCss()
    .personal-wrapper
        display: block
        position: relative
        margin-bottom: 0.3125rem
        width: width
        height: 2.5625rem
        background: color
        .avator
            margin: 0.4688rem 0.3125rem 0.4688rem 0.5rem
            float: left
            width: 1.625rem
            height: 1.625rem
        .personal
            width: 400px
            float: left
        .name
            display: inline-block
            margin: 0.4688rem 0 12px 0
            font-size: 0.4375rem
            color: #000
        .mobile
            display: block
            font-size: 0.375rem
            color: #909090
            margin-bottom: 0.2813rem
        .rank
            width: 1.125rem
            height: 0.375rem    
        .more-link
            position: absolute
            right: 32px
            top: 50%
            margin-top: -12px
            .qr-code
                margin-right: 24px
            img
                float: left
                width: 0.375rem
                height: 0.375rem
    .item-cls
        display: block
        margin-left: 0.5rem
        width: width
        height: 1.3438rem
        line-height: 1.3438rem  
        border-bottom-1px(#e5e5e5)
        font-size: 0.4063rem
        color: #333  
        &:last-child
            border-bottom-none()
    .notecase-wrapper .more,.order-wrapper .more,.team-wrapper .more,.helper .more
        position: absolute
        right: 32px
        top: 50%
        margin-top: -0.1875rem
        margin-right: 0.5rem
        width: 0.375rem
        height: 0.375rem      
    .notecase-wrapper
        width: width
        background: color
        .num
            float: right
            margin-right: 1.625rem 
            color: #909090  
    .order-wrapper
        margin: 18px 0
        width: width
        font-size: 26px 
        background: color
    .team-wrapper 
        width: width
        background: color
    .helper
        width: width
        background: color
        margin: 18px 0 120px 0          
     
</style>

