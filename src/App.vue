<template>
  <div id="app">
    <v-header></v-header>
    <div class="menu-wrapper">
        <div class="menu-tag border-top-1px"> 
            <div class="tag-list">
              <router-link to="/home"><div class="home" @click=""></div>美丽探索</router-link>
            </div>
            <div class="tag-list">
              <router-link to="/goods"><div class="goods"></div>商品分类</router-link>
            </div>
            <div class="tag-list">
              <router-link to="/myCenter"><div class="myCenter"></div>个人中心</router-link>
            </div>
            <div class="tag-list">
              <router-link to="/orderFrom"><div class="orderFrom"></div>查看订单</router-link>
            </div>
        </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="ecmascript-6"> 
import header from './components/header/header';
import myCenter from './components/myCenter/myCenter';
export default {
  components: {
    'v-header': header,
    myCenter,
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import './commom/stylus/mixin'
  .menu-wrapper
    position: fixed
    left: 0
    bottom:0
    width: 100%
    z-index: 450
    .menu-tag
      display: flex
      width: 100%
      height: 43px
      font-size: 0
      border-top-1px(#b2b2b2)
      background: rgba(255,255,255,0.95)
      .tag-list
        flex: 1
        font-size: 0.625rem
        text-align: center
        .active
          color: #ea68a2
      .home,.goods,.myCenter,.orderFrom      
        margin: 0.1875rem auto 0.3125rem auto
        width: 1.375rem
        height: 1.375rem
        background: #dd0
      .home
        background:url('../resource/home.png')     
      .goods
        background:url('../resource/goods.png')
      .myCenter
        background:url('../resource/myCenter.png')
      .orderFrom 
        background:url('../resource/orderFrom.png')
      .home,.goods,.myCenter,.orderFrom     
        background-size: 1.375rem 1.375rem
      a
        display: inline-block 
        
</style>
            