<template>
      
  <div class="myQRcode-wrapper">
        <div class="header">
            <div class="header-content border-bottom-1px">
                <a href="javascript:history.back(-1)" class="goBack">
				    <img src="./arrow_left.png" height="16">
				    <span>返回</span>
			    </a>
                <h1 class="title">我的二维码</h1>
                <img class="search" src="./search.png" width="32" height="32"/>
            </div>
        </div> 
        <div class="fuild-filter">
            <img class="avator" src="./avatar.png">
            <div class="personal">
                <h2 class="name">陈宝军</h2>
                <span class="mobile">13560433216</span>
                <img class="rank" src="./rank.png">
            </div>
                <img class="append" width="42" height="42" src="./append.png"/>
            <img class="QRcode" width="446" height="446" src="./QRcode.png"/>
            <p class="desc">识别二维码，加入我的女神行列</p>
        </div>
  </div>
</template>
<script type="ecmascript-6">
export default {
  
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
    .header
        headerCss()
    .myQRcode-wrapper
        margin-top: 1.7188rem
        width: 100%
        height: 100%
        overflow: hidden
        .fuild-filter
            position: relative
            margin: 30px auto
            width: 9.0625rem
            height: 90%
            z-index: -1
            background: url(./background.png)no-repeat
            background-size: cover
            box-shadow: 0 0 0.1563rem #909090
            border-radius: 10px
            .avator
                margin: 0.4688rem 0.3125rem 0.4688rem 0.4688rem
                float: left
                width: 1.625rem
                height: 1.625rem
            .personal
                width: 6.25rem
                float: left
            .name
                display: inline-block
                margin: 0.4688rem 0 0.1875rem 0
                font-size: 28px
                color: #000
            .mobile
                display: block
                font-size: 0.375rem
                color: #909090
                margin-bottom: 0.2813rem
             .rank  
                float: left
                width: 1.125rem
                height: 0.375rem   
            .append
                position: absolute
                top: 0
                right: 0
            .QRcode
                padding: 0.2813rem
                margin: 1.125rem auto 0 auto
                background: #fff
            .desc
                margin: 2.375rem 0 1.25rem 0
                text-align: center
                font-size: 0.4063rem
                color: #909090
</style>
