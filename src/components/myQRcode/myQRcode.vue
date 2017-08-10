<template>
  <div class="myQRcode-wrapper">
        <!--头部  -->
        <!-- <v-header></v-header> -->
        <div class="fuild-filter">
            <img class="avator" src="./avatar.png">
            <div class="personal">
                <h2 class="name">陈宝军</h2>
                <span class="mobile">13560433216</span>
                <img class="rank" src="./rank.png">
            </div>
                <img class="append" src="./append.png"/>
            <img class="QRcode" src="./QRcode.png"/>
            <p class="desc">识别二维码，加入我的梦乐城</p>
        </div>
  </div>
</template>
<script type="ecmascript-6">
// import header from '../../components/header/header'; 
export default {
  components: {
    //  'v-header': header
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
.myQRcode-wrapper
    width: 100%
    // height: 100%
    .fuild-filter
        position: relative
        margin: 1.5625rem auto
        width: 9.0625rem
        height: 90%
        z-index: -1
        background: url(./background.png)no-repeat
        background-size: cover
        box-shadow: 0 0 0.1563rem #909090
        border-radius: 0.1563rem
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
            font-size: 0.4063rem
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
            display: block
            width: 6.9688rem
            height: 6.9688rem
            padding: 0.2813rem
            margin: 1.125rem auto 
            background: #fff
        .desc
            margin: 2.375rem 0 1.25rem 0
            text-align: center
            font-size: 0.4063rem
            color: #909090
</style>
