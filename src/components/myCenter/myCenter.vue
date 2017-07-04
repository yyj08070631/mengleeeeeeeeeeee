<template>
  <div class="myCenter-wrapper">
      <!--个人资料-->
      <div class="personal-wrapper">
          <img class="avator" src="./avator.png" width=52 height=52/>
          <div class="personal">
              <h2 class="name">陈宝军</h2>
              <span class="mobile">13560433216</span>
              <img class="rank" src="./rank.png" height="12"/>
          </div>

          <div class="more-link">
              <img class="qr-code" width=12 height=12 src="./QR_code.png"/>
              <a href="#">
                  <img width=12 height=12 src="./more.png">
              </a>
          </div>
      </div>
      <!--个人资料-->
      <!--账单积分-->
      <div class="notecase-wrapper">
          <a href="#" class="notecase-item item-cls">我的账单<img class="more" width=12 height=12 src="./__more.png"/></a>
          <a href="#" class="notecase-item item-cls">我的积分<img class="more" width=12 height=12 src="./__more.png"/></a>
          <a href="#" class="notecase-item item-cls">我的钱包<img class="more" width=12 height=12 src="./__more.png"/></a> 
      </div>
      <!--账单积分-->
  </div>
</template>
<script type="ecmascript-6">

</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
  .myCenter-wrapper
    position: absolute
    top: 1.875rem
    left: 0
    width: 100%
    hieght: 100%
    font-size: 0
    overflow: hidden
    background: #ddd
    .personal-wrapper
      position: relative
      margin-bottom: 0.625rem
      width: 100%
      height: 5.125rem
      background: #fff
      .avator
        margin: 15px 10px 15px 15px
        float: left
      .personal
        width: 12.5rem
        float: left
        .name
          display: inline-block
          margin: 0.9375rem 0 0.375rem 0
          font-size: 0.875rem
        .mobile
          display: block
          font-size: 0.5625rem
          color: #909090
          margin-bottom: 0.6875rem
        .rank
          vertical-align: top
      .more-link
        position: absolute
        right: 1rem
        top: 50%
        margin-top: -0.375rem
        .qr-code
          margin-right: 0.75rem    
    .notecase-wrapper
      width: 100%
      height: 8.3438rem
      background: #eef0f8
      .notecase-item
        font-size: 0.8125rem
        margin-left: 15px
      .item-cls
        display: block
        position: relative
        width: 100%
        height: 2.6875rem
        line-height: 2.6875rem
        border-bottom-1px(#ccc)
        &:last-child
          border-bottom-none()
        .more
          position: absolute
          right: 1rem
          top: 50%
          margin-top: -6px

     
</style>

