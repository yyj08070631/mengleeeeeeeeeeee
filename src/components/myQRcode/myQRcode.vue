<template>
      
  <div class="myQRcode-wrapper">
        <div class="header">
            <div class="header-content border-bottom-1px">
                <a href="javascript:history.back(-1)" class="goBack">
				    <img src="./arrow_left.png" height="16">
				    <span>返回</span>
			    </a>
                <h1 class="title">我的二维码</h1>
                <img class="search" src="./search.png" width="16" height="16"/>
            </div>
        </div> 
        <div class="fuild-filter">
            <img class="avator" src="./avatar.png" width=52 height=52>
            <div class="personal">
                <h2 class="name">陈宝军</h2>
                <span class="mobile">13560433216</span>
                <img class="rank" src="./rank.png" height="12">
            </div>
                <img class="append" width="42" height="42" src="./append.png"/>
            <img class="QRcode" width="223" height="223" src="./QRcode.png"/>
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
        margin-top: 3.4375rem
        width: 100%
        height: 100%
        .fuild-filter
            position: relative
            margin: 0.9375rem auto
            width: 18.125rem
            height: 90%
            z-index: -1
            background: url(./background.png)no-repeat
            background-size: cover
            box-shadow: 0 0 0.3125rem #909090
            border-radius: 0.3125rem
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
                font-size: 0.75rem
                color: #909090
                margin-bottom: 0.5625rem
            .append
                position: absolute
                top: 0
                right: 0
            .QRcode
                padding: 0.5625rem
                margin: 2.25rem 0 0 1.5625rem 
                background: #fff
            .desc
                margin: 4.75rem 0 1.875rem 0
                text-align: center
                font-size: 0.8125rem
                color: #909090
</style>
