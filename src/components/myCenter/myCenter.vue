<template>
    <div class="myCenter-wrapper">
      <!--头部  -->
        <div class="header">
            <div class="header-content border-bottom-1px">
                <h1 class="title">个人中心</h1>
                <img class="search" src="./search.png" width="16" height="16">
            </div>
        </div>
      <!--头部  -->  
      <!--个人资料-->
        <a class="personal-wrapper" href="#settings">
            <img class="avator" src="./avatar.png" width=52 height=52>
            <div class="personal">
                <h2 class="name">陈宝军</h2>
                <span class="mobile">13560433216</span>
                <img class="rank" src="./rank.png" height="12">
            </div>

            <div class="more-link">
                <img class="qr-code" width=16 height=16 src="./QR_code.png">
                    <img width=16 height=16 src="./more.png">
            </div>
        </a>
      <!--个人资料-->
      <!--账单积分-->
        <div class="notecase-wrapper">
                <a href="#home" class="item-cls">我的账单<img class="more" width=16 height=16 src="./more.png"></a>
                <a href="#home" class="item-cls"><span class="num">58,000积分</span>我的积分<img class="more" width=16 height=16 src="./more.png"></a>
                <a href="#home" class="item-cls"><span class="num">3,480元</span>我的钱包<img class="more" width=16 height=16 src="./more.png"></a> 
        </div>
      <!--账单积分-->
      <!--我的预约-->
        <div class="order-wrapper">
            <a href="#home" class="item-cls">我的预约<img class="more" width=16 height=16 src="./more.png"></a>
        </div>
      <!--我的预约-->
        <div class="team-wrapper">
            <a href="#home" class="item-cls">我的团队<img class="more" width=16 height=16 src="./more.png"></a>
            <a href="#home" class="item-cls">头衔统计<img class="more" width=16 height=16 src="./more.png"></a>
            <a href="#home" class="item-cls">拓展统计<img class="more" width=16 height=16 src="./more.png"></a>
            <a href="#home" class="item-cls">团队统计<img class="more" width=16 height=16 src="./more.png"></a>
        </div>
        <div class="helper">
            <a href="#goodDetail" class="item-cls">获得帮助<img class="more" width=16 height=16 src="./more.png"></a>
        </div>
    </div>
</template>
<script type="ecmascript-6">

</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
  width = 100%
  color = #fff
  .myCenter-wrapper
        position: absolute
        top: 40px
        left: 0
        width: width
        font-size: 0
        overflow: hidden
        background: #f0f0f0
        .header
           headerCss()
    .personal-wrapper
        display: block
        position: relative
        margin-bottom: 0.625rem
        width: width
        height: 5.125rem
        background: color
        .avator
            margin: 0.9375rem 0.625rem 0.9375rem 0.9375rem
            float: left
        .personal
            width: 12.5rem
            float: left
        .name
            display: inline-block
            margin: 0.9375rem 0 0.375rem 0
            font-size: 0.875rem
            color: #000
        .mobile
            display: block
            font-size: 12px
            color: #909090
            margin-bottom: 0.5625rem
        .more-link
            position: absolute
            right: 1rem
            top: 50%
            margin-top: -0.375rem
            .qr-code
                margin-right: 0.75rem
    .item-cls
        display: block
        margin-left: 0.9375rem
        width: width
        height: 2.6875rem
        line-height: 2.6875rem  
        border-bottom-1px(#e5e5e5)
        font-size: 0.8125rem
        color: #333
        &:last-child
            border-bottom-none()
    .notecase-wrapper .more,.order-wrapper .more,.team-wrapper .more,.helper .more
        position: absolute
        right: 1rem
        top: 50%
        margin-top: -0.5rem
        margin-right: 0.875rem      
    .notecase-wrapper
        width: width
        background: color
        .num
            float: right
            margin-right: 3.25rem 
            color: #909090  
    .order-wrapper
        margin: 0.5625rem 0
        width: width
        font-size: 0.8125rem 
        background: color
    .team-wrapper 
        width: width
        background: color
    .helper
        width: width
        background: color
        margin: 0.5625rem 0 3.75rem 0          
     
</style>

